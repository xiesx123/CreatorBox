import datetime
import json
import math
import re
import socket
import threading
import time
import warnings
from collections import OrderedDict
from random import randrange
from urllib.parse import quote, urlencode
from uuid import uuid4

import python_jwt as jwt
import requests
import six
from Crypto.PublicKey import RSA
from oauth2client.service_account import ServiceAccountCredentials
from requests import Session
from requests.adapters import HTTPAdapter
from requests.exceptions import HTTPError


def initialize_app(config):
    return Firebase(config)


class Firebase:
    """Firebase Interface"""

    def __init__(self, config):
        self.api_key = config["apiKey"]
        self.auth_domain = config["authDomain"]
        self.database_url = config["databaseURL"]
        self.storage_bucket = config["storageBucket"]
        self.credentials = None
        self.requests = requests.Session()
        if config.get("serviceAccount"):
            scopes = ["https://www.googleapis.com/auth/firebase.database", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/cloud-platform"]
            service_account_type = type(config["serviceAccount"])
            if service_account_type is str:
                self.credentials = ServiceAccountCredentials.from_json_keyfile_name(config["serviceAccount"], scopes)
            if service_account_type is dict:
                self.credentials = ServiceAccountCredentials.from_json_keyfile_dict(config["serviceAccount"], scopes)
        # if is_appengine_sandbox():
        #     # Fix error in standard GAE environment
        #     # is releated to https://github.com/kennethreitz/requests/issues/3187
        #     # ProtocolError('Connection aborted.', error(13, 'Permission denied'))
        #     adapter = appengine.AppEngineAdapter(max_retries=3)
        # else:
        # adapter = HTTPAdapter()
        adapter = HTTPAdapter()

        for scheme in ("http://", "https://"):
            self.requests.mount(scheme, adapter)

    def auth(self):
        return Auth(self.api_key, self.requests, self.credentials)

    def database(self):
        return Database(self.credentials, self.api_key, self.database_url, self.requests)

    def storage(self):
        return Storage(self.credentials, self.storage_bucket, self.requests)


class Auth:
    """Authentication Service"""

    def __init__(self, api_key, requests, credentials):
        self.api_key = api_key
        self.current_user = None
        self.requests = requests
        self.credentials = credentials

    def sign_in_with_email_and_password(self, email, password):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"email": email, "password": password, "returnSecureToken": True})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        self.current_user = request_object.json()
        return request_object.json()

    def sign_in_anonymous(self):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"returnSecureToken": True})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        self.current_user = request_object.json()
        return request_object.json()

    def create_custom_token(self, uid, additional_claims=None, expiry_minutes=60):
        service_account_email = self.credentials.service_account_email
        private_key = RSA.importKey(self.credentials._private_key_pkcs8_pem)
        payload = {"iss": service_account_email, "sub": service_account_email, "aud": "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit", "uid": uid}
        if additional_claims:
            payload["claims"] = additional_claims
        exp = datetime.timedelta(minutes=expiry_minutes)
        return jwt.generate_jwt(payload, private_key, "RS256", exp)

    def sign_in_with_custom_token(self, token):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"returnSecureToken": True, "token": token})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def refresh(self, refresh_token):
        request_ref = "https://securetoken.googleapis.com/v1/token?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"grantType": "refresh_token", "refreshToken": refresh_token})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        request_object_json = request_object.json()
        # handle weirdly formatted response
        user = {"userId": request_object_json["user_id"], "idToken": request_object_json["id_token"], "refreshToken": request_object_json["refresh_token"]}
        return user

    def get_account_info(self, id_token):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"idToken": id_token})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def send_email_verification(self, id_token):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"requestType": "VERIFY_EMAIL", "idToken": id_token})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def send_password_reset_email(self, email):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"requestType": "PASSWORD_RESET", "email": email})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def verify_password_reset_code(self, reset_code, new_password):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/resetPassword?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"oobCode": reset_code, "newPassword": new_password})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def create_user_with_email_and_password(self, email, password):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"email": email, "password": password, "returnSecureToken": True})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def delete_user_account(self, id_token):
        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/deleteAccount?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"idToken": id_token})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()

    def update_profile(self, id_token, display_name=None, photo_url=None, delete_attribute=None):
        """
        https://firebase.google.com/docs/reference/rest/auth#section-update-profile
        """
        request_ref = "https://identitytoolkit.googleapis.com/v1/accounts:update?key={0}".format(self.api_key)
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"idToken": id_token, "displayName": display_name, "photoURL": photo_url, "deleteAttribute": delete_attribute, "returnSecureToken": True})
        request_object = requests.post(request_ref, headers=headers, data=data)
        raise_detailed_error(request_object)
        return request_object.json()


class Database:
    """Database Service"""

    def __init__(self, credentials, api_key, database_url, requests):

        if not database_url.endswith("/"):
            url = "".join([database_url, "/"])
        else:
            url = database_url

        self.credentials = credentials
        self.api_key = api_key
        self.database_url = url
        self.requests = requests

        self.path = ""
        self.build_query = {}
        self.last_push_time = 0
        self.last_rand_chars = []

    def order_by_key(self):
        self.build_query["orderBy"] = "$key"
        return self

    def order_by_value(self):
        self.build_query["orderBy"] = "$value"
        return self

    def order_by_child(self, order):
        self.build_query["orderBy"] = order
        return self

    def start_at(self, start):
        self.build_query["startAt"] = start
        return self

    def end_at(self, end):
        self.build_query["endAt"] = end
        return self

    def equal_to(self, equal):
        self.build_query["equalTo"] = equal
        return self

    def limit_to_first(self, limit_first):
        self.build_query["limitToFirst"] = limit_first
        return self

    def limit_to_last(self, limit_last):
        self.build_query["limitToLast"] = limit_last
        return self

    def shallow(self):
        self.build_query["shallow"] = True
        return self

    def child(self, *args):
        new_path = "/".join([str(arg) for arg in args])
        if self.path:
            self.path += "/{}".format(new_path)
        else:
            if new_path.startswith("/"):
                new_path = new_path[1:]
            self.path = new_path
        return self

    def build_request_url(self, token):
        parameters = {}
        if token:
            parameters["auth"] = token
        for param in list(self.build_query):
            if type(self.build_query[param]) is str:
                parameters[param] = '"' + self.build_query[param] + '"'
            elif type(self.build_query[param]) is bool:
                parameters[param] = "true" if self.build_query[param] else "false"
            else:
                parameters[param] = self.build_query[param]
        # reset path and build_query for next query
        request_ref = "{0}{1}.json?{2}".format(self.database_url, self.path, urlencode(parameters))
        self.path = ""
        self.build_query = {}
        return request_ref

    def build_headers(self, token=None):
        headers = {"content-type": "application/json; charset=UTF-8"}
        if not token and self.credentials:
            access_token = self.credentials.get_access_token().access_token
            headers["Authorization"] = "Bearer " + access_token
        return headers

    def get(self, token=None, json_kwargs=None):
        json_kwargs = json_kwargs or {}
        build_query = self.build_query
        query_key = self.path.split("/")[-1]
        request_ref = self.build_request_url(token)
        # headers
        headers = self.build_headers(token)
        # do request
        request_object = self.requests.get(request_ref, headers=headers)
        raise_detailed_error(request_object)
        request_dict = request_object.json(**json_kwargs)

        # if primitive or simple query return
        if isinstance(request_dict, list):
            return PyreResponse(convert_list_to_pyre(request_dict), query_key)
        if not isinstance(request_dict, dict):
            return PyreResponse(request_dict, query_key)
        if not build_query:
            return PyreResponse(convert_to_pyre(request_dict.items()), query_key)
        # return keys if shallow
        if build_query.get("shallow"):
            return PyreResponse(request_dict.keys(), query_key)
        # otherwise sort
        sorted_response = None
        if build_query.get("orderBy"):
            if build_query["orderBy"] == "$key":
                sorted_response = sorted(request_dict.items(), key=lambda item: item[0])
            elif build_query["orderBy"] == "$value":
                sorted_response = sorted(request_dict.items(), key=lambda item: item[1])
            else:
                sorted_response = sorted(request_dict.items(), key=lambda item: (build_query["orderBy"] in item[1], item[1].get(build_query["orderBy"], "")))
        return PyreResponse(convert_to_pyre(sorted_response), query_key)

    def push(self, data, token=None, json_kwargs=None):
        json_kwargs = json_kwargs or {}
        request_ref = self.check_token(self.database_url, self.path, token)
        self.path = ""
        headers = self.build_headers(token)
        request_object = self.requests.post(request_ref, headers=headers, data=json.dumps(data, **json_kwargs).encode("utf-8"))
        raise_detailed_error(request_object)
        return request_object.json()

    def set(self, data, token=None, json_kwargs=None):
        json_kwargs = json_kwargs or {}
        request_ref = self.check_token(self.database_url, self.path, token)
        self.path = ""
        headers = self.build_headers(token)
        request_object = self.requests.put(request_ref, headers=headers, data=json.dumps(data, **json_kwargs).encode("utf-8"))
        raise_detailed_error(request_object)
        return request_object.json()

    def update(self, data, token=None, json_kwargs=None):
        json_kwargs = json_kwargs or {}
        request_ref = self.check_token(self.database_url, self.path, token)
        self.path = ""
        headers = self.build_headers(token)
        request_object = self.requests.patch(request_ref, headers=headers, data=json.dumps(data, **json_kwargs).encode("utf-8"))
        raise_detailed_error(request_object)
        return request_object.json()

    def remove(self, token=None):
        request_ref = self.check_token(self.database_url, self.path, token)
        self.path = ""
        headers = self.build_headers(token)
        request_object = self.requests.delete(request_ref, headers=headers)
        raise_detailed_error(request_object)
        return request_object.json()

    def stream(self, stream_handler, token=None, stream_id=None, is_async=True):
        request_ref = self.build_request_url(token)
        return Stream(request_ref, stream_handler, self.build_headers, stream_id, is_async)

    def check_token(self, database_url, path, token):
        if token:
            return "{0}{1}.json?auth={2}".format(database_url, path, token)
        else:
            return "{0}{1}.json".format(database_url, path)

    def generate_key(self):
        push_chars = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"
        now = int(time.time() * 1000)
        duplicate_time = now == self.last_push_time
        self.last_push_time = now
        time_stamp_chars = [0] * 8
        for i in reversed(range(0, 8)):
            time_stamp_chars[i] = push_chars[now % 64]
            now = int(math.floor(now / 64))
        new_id = "".join(time_stamp_chars)
        if not duplicate_time:
            self.last_rand_chars = [randrange(64) for _ in range(12)]
        else:
            for i in range(0, 11):
                if self.last_rand_chars[i] == 63:
                    self.last_rand_chars[i] = 0
                self.last_rand_chars[i] += 1
        for i in range(0, 12):
            new_id += push_chars[self.last_rand_chars[i]]
        return new_id

    def sort(self, origin, by_key, reverse=False):
        # unpack pyre objects
        pyres = origin.each()
        new_list = []
        for pyre in pyres:
            new_list.append(pyre.item)
        # sort
        data = sorted(dict(new_list).items(), key=lambda item: item[1][by_key], reverse=reverse)
        return PyreResponse(convert_to_pyre(data), origin.key())

    def get_etag(self, token=None, json_kwargs=None):
        json_kwargs = json_kwargs or {}
        request_ref = self.build_request_url(token)
        headers = self.build_headers(token)
        # extra header to get ETag
        headers["X-Firebase-ETag"] = "true"
        request_object = self.requests.get(request_ref, headers=headers)
        raise_detailed_error(request_object)
        return {"ETag": request_object.headers["ETag"], "value": request_object.json()}

    def conditional_set(self, data, etag, token=None, json_kwargs=None):
        json_kwargs = json_kwargs or {}
        request_ref = self.check_token(self.database_url, self.path, token)
        self.path = ""
        headers = self.build_headers(token)
        headers["if-match"] = etag
        request_object = self.requests.put(request_ref, headers=headers, data=json.dumps(data, **json_kwargs).encode("utf-8"))

        # ETag didn't match, so we should return the correct one for the user to try again
        if request_object.status_code == 412:
            return {"ETag": request_object.headers["ETag"], "value": request_object.json()}

        raise_detailed_error(request_object)
        return request_object.json()

    def conditional_remove(self, etag, token=None):
        request_ref = self.check_token(self.database_url, self.path, token)
        self.path = ""
        headers = self.build_headers(token)
        headers["if-match"] = etag
        request_object = self.requests.delete(request_ref, headers=headers)

        # ETag didn't match, so we should return the correct one for the user to try again
        if request_object.status_code == 412:
            return {"ETag": request_object.headers["ETag"], "value": request_object.json()}

        raise_detailed_error(request_object)
        return request_object.json()


class Storage:
    from gcloud import storage

    """ Storage Service """

    def __init__(self, credentials, storage_bucket, requests):
        self.storage_bucket = "https://firebasestorage.googleapis.com/v0/b/" + storage_bucket
        self.credentials = credentials
        self.requests = requests
        self.path = ""
        if credentials:
            client = storage.Client(credentials=credentials, project=storage_bucket)
            self.bucket = client.get_bucket(storage_bucket)

    def child(self, *args):
        new_path = "/".join(args)
        if self.path:
            self.path += "/{}".format(new_path)
        else:
            if new_path.startswith("/"):
                new_path = new_path[1:]
            self.path = new_path
        return self

    def put(self, file, token=None, content_type=None):
        # reset path
        path = self.path
        self.path = None
        if isinstance(file, str):
            file_object = open(file, "rb")
        else:
            file_object = file
        request_ref = self.storage_bucket + "/o?name={0}".format(path)
        if token:
            headers = {"Authorization": "Firebase " + token}
            request_object = self.requests.post(request_ref, headers=headers, data=file_object)
            raise_detailed_error(request_object)
            return request_object.json()
        elif self.credentials:
            blob = self.bucket.blob(path)

            # Add metadata to enable file previews in console
            blob.metadata = {"firebaseStorageDownloadTokens": str(uuid4())}
            if isinstance(file, str):
                return blob.upload_from_filename(filename=file)
            else:
                # If the file is not a string we need to patch the blob after upload to set the content type
                blob.upload_from_string(file)
                if content_type:
                    blob.content_type = content_type
                blob.patch()
        else:
            request_object = self.requests.post(request_ref, data=file_object)
            raise_detailed_error(request_object)
            return request_object.json()

    def delete(self, name, token):
        if self.credentials:
            self.bucket.delete_blob(name)
        else:
            request_ref = self.storage_bucket + "/o?name={0}".format(name)
            if token:
                headers = {"Authorization": "Firebase " + token}
                request_object = self.requests.delete(request_ref, headers=headers)
            else:
                request_object = self.requests.delete(request_ref)
            raise_detailed_error(request_object)

    def download(self, path, filename, token=None):
        # remove leading backlash
        url = self.get_url(token)
        if path.startswith("/"):
            path = path.lstrip("/")
        if self.credentials:
            blob = self.bucket.get_blob(path)
            if not blob is None:
                blob.download_to_filename(filename)
        elif token:
            headers = {"Authorization": "Firebase " + token}
            r = requests.get(url, stream=True, headers=headers)
            if r.status_code == 200:
                with open(filename, "wb") as f:
                    for chunk in r:
                        f.write(chunk)
        else:
            r = requests.get(url, stream=True)
            if r.status_code == 200:
                with open(filename, "wb") as f:
                    for chunk in r:
                        f.write(chunk)

    def get_url(self, token):
        path = self.path if self.path else ""
        self.path = None
        if path.startswith("/"):
            path = path.lstrip("/")
        if token:
            return "{0}/o/{1}?alt=media&token={2}".format(self.storage_bucket, quote(path, safe=""), token)
        return "{0}/o/{1}?alt=media".format(self.storage_bucket, quote(path, safe=""))

    def list_files(self):
        return self.bucket.list_blobs()


def raise_detailed_error(request_object):
    try:
        request_object.raise_for_status()
    except HTTPError as e:
        # raise detailed error message
        # TODO: Check if we get a { "error" : "Permission denied." } and handle automatically
        raise HTTPError(e, request_object.text)


def convert_to_pyre(items):
    pyre_list = []
    for item in items:
        pyre_list.append(Pyre(item))
    return pyre_list


def convert_list_to_pyre(items):
    pyre_list = []
    for item in items:
        pyre_list.append(Pyre([items.index(item), item]))
    return pyre_list


class SSEClient(object):

    # Technically, we should support streams that mix line endings.  This regex,
    # however, assumes that a system will provide consistent line endings.
    end_of_field = re.compile(r"\r\n\r\n|\r\r|\n\n")

    def __init__(self, url, session, build_headers, last_id=None, retry=3000, **kwargs):
        self.url = url
        self.last_id = last_id
        self.retry = retry
        self.running = True
        # Optional support for passing in a requests.Session()
        self.session = session
        # function for building auth header when token expires
        self.build_headers = build_headers
        self.start_time = None
        # Any extra kwargs will be fed into the requests.get call later.
        self.requests_kwargs = kwargs

        # The SSE spec requires making requests with Cache-Control: nocache
        if "headers" not in self.requests_kwargs:
            self.requests_kwargs["headers"] = {}
        self.requests_kwargs["headers"]["Cache-Control"] = "no-cache"

        # The 'Accept' header is not required, but explicit > implicit
        self.requests_kwargs["headers"]["Accept"] = "text/event-stream"

        # Keep data here as it streams in
        self.buf = ""

        self._connect()

    def _connect(self):
        if self.last_id:
            self.requests_kwargs["headers"]["Last-Event-ID"] = self.last_id
        headers = self.build_headers()
        self.requests_kwargs["headers"].update(headers)
        # Use session if set.  Otherwise fall back to requests module.
        self.requester = self.session or requests
        self.resp = self.requester.get(self.url, stream=True, **self.requests_kwargs)

        self.resp_iterator = self.resp.iter_content(decode_unicode=True)

        # TODO: Ensure we're handling redirects.  Might also stick the 'origin'
        # attribute on Events like the Javascript spec requires.
        self.resp.raise_for_status()

    def _event_complete(self):
        return re.search(self.end_of_field, self.buf) is not None

    def __iter__(self):
        return self

    def __next__(self):
        while not self._event_complete():
            try:
                nextchar = next(self.resp_iterator)
                self.buf += nextchar
            except (StopIteration, requests.RequestException):
                time.sleep(self.retry / 1000.0)
                self._connect()

                # The SSE spec only supports resuming from a whole message, so
                # if we have half a message we should throw it out.
                head, sep, tail = self.buf.rpartition("\n")
                self.buf = head + sep
                continue

        split = re.split(self.end_of_field, self.buf)
        head = split[0]
        tail = "".join(split[1:])

        self.buf = tail
        msg = Event.parse(head)

        if msg.data == "credential is no longer valid":
            self._connect()
            return None

        if msg.data == "null":
            return None

        # If the server requests a specific retry delay, we need to honor it.
        if msg.retry:
            self.retry = msg.retry

        # last_id should only be set if included in the message.  It's not
        # forgotten if a message omits it.
        if msg.id:
            self.last_id = msg.id

        return msg

    if six.PY2:
        next = __next__


class PyreResponse:
    def __init__(self, pyres, query_key):
        self.pyres = pyres
        self.query_key = query_key

    def __getitem__(self, index):
        return self.pyres[index]

    def val(self):
        if isinstance(self.pyres, list) and self.pyres:
            # unpack pyres into OrderedDict
            pyre_list = []
            # if firebase response was a list
            if isinstance(self.pyres[0].key(), int):
                for pyre in self.pyres:
                    pyre_list.append(pyre.val())
                return pyre_list
            # if firebase response was a dict with keys
            for pyre in self.pyres:
                pyre_list.append((pyre.key(), pyre.val()))
            return OrderedDict(pyre_list)
        else:
            # return primitive or simple query results
            return self.pyres

    def key(self):
        return self.query_key

    def each(self):
        if isinstance(self.pyres, list):
            return self.pyres


class Pyre:
    def __init__(self, item):
        self.item = item

    def val(self):
        return self.item[1]

    def key(self):
        return self.item[0]


class KeepAuthSession(Session):
    """
    A session that doesn't drop Authentication on redirects between domains.
    """

    def rebuild_auth(self, prepared_request, response):
        pass


class ClosableSSEClient(SSEClient):
    def __init__(self, *args, **kwargs):
        self.should_connect = True
        super(ClosableSSEClient, self).__init__(*args, **kwargs)

    def _connect(self):
        if self.should_connect:
            super(ClosableSSEClient, self)._connect()
        else:
            raise StopIteration()

    def close(self):
        self.should_connect = False
        self.retry = 0
        self.resp.raw._fp.fp.raw._sock.shutdown(socket.SHUT_RDWR)
        self.resp.raw._fp.fp.raw._sock.close()


class Stream:
    def __init__(self, url, stream_handler, build_headers, stream_id, is_async):
        self.build_headers = build_headers
        self.url = url
        self.stream_handler = stream_handler
        self.stream_id = stream_id
        self.sse = None
        self.thread = None

        if is_async:
            self.start()
        else:
            self.start_stream()

    def make_session(self):
        """
        Return a custom session object to be passed to the ClosableSSEClient.
        """
        session = KeepAuthSession()
        return session

    def start(self):
        self.thread = threading.Thread(target=self.start_stream)
        self.thread.start()
        return self

    def start_stream(self):
        self.sse = ClosableSSEClient(self.url, session=self.make_session(), build_headers=self.build_headers)
        for msg in self.sse:
            if msg:
                msg_data = json.loads(msg.data)
                msg_data["event"] = msg.event
                if self.stream_id:
                    msg_data["stream_id"] = self.stream_id
                self.stream_handler(msg_data)

    def close(self):
        while not self.sse and not hasattr(self.sse, "resp"):
            time.sleep(0.001)
        self.sse.running = False
        self.sse.close()
        self.thread.join()
        return self


class Event(object):

    sse_line_pattern = re.compile("(?P<name>[^:]*):?( ?(?P<value>.*))?")

    def __init__(self, data="", event="message", id=None, retry=None):
        self.data = data
        self.event = event
        self.id = id
        self.retry = retry

    def dump(self):
        lines = []
        if self.id:
            lines.append("id: %s" % self.id)

        # Only include an event line if it's not the default already.
        if self.event != "message":
            lines.append("event: %s" % self.event)

        if self.retry:
            lines.append("retry: %s" % self.retry)

        lines.extend("data: %s" % d for d in self.data.split("\n"))
        return "\n".join(lines) + "\n\n"

    @classmethod
    def parse(cls, raw):
        """
        Given a possibly-multiline string representing an SSE message, parse it
        and return a Event object.
        """
        msg = cls()
        for line in raw.split("\n"):
            m = cls.sse_line_pattern.match(line)
            if m is None:
                # Malformed line.  Discard but warn.
                warnings.warn('Invalid SSE line: "%s"' % line, SyntaxWarning)
                continue

            name = m.groupdict()["name"]
            value = m.groupdict()["value"]
            if name == "":
                # line began with a ":", so is a comment.  Ignore
                continue

            if name == "data":
                # If we already have some data, then join to it with a newline.
                # Else this is it.
                if msg.data:
                    msg.data = "%s\n%s" % (msg.data, value)
                else:
                    msg.data = value
            elif name == "event":
                msg.event = value
            elif name == "id":
                msg.id = value
            elif name == "retry":
                msg.retry = int(value)

        return msg

    def __str__(self):
        return self.data
