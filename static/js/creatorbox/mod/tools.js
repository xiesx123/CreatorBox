layui.define(['layer', 'table', 'form', 'element', 'upload', 'notice'], function (exports) {
	var layer = layui.layer;
	var table = layui.table;
	var form = layui.form;
	var element = layui.element;
	var upload = layui.upload;
	var toast = layui.notice;
	var $ = layui.jquery;

	const reconnectInterval = 5000;

	const timeout = 30 * 1000;

	const identifier = 'table'

	var idx = 0

	var mod = {

		connect: function (callback) {
			const currentUrl = window.location.href;
			const currentProtocol = window.location.protocol;
			const isLocal = currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1');

			const domain = window.location.hostname;
			const port = window.location.port || (currentProtocol === 'https:' ? '443' : '80');
			const fullHost = isLocal ? `http://${domain}:8000` : `${currentProtocol}//${domain}:${port}`;

			const socket = io(fullHost, {
				reconnection: true,
				reconnectionDelay: 1000 * 60,
			});

			socket.on('connect', function () {
				console.debug('socket connected success');
			});

			socket.on('disconnect', function () {
				console.debug('socket disconnect');
			});

			socket.on('event_message', function (msg) {
				data = JSON.parse(msg)
				console.debug(data.message);
				if (callback) callback(data);
			});

			socket.on('connect_error', function (err) {
				console.error('socket connect error', err);
			});
			return socket
		},

		get: function (url, parames, callback, progress) {
			$.ajax({
				type: 'GET',
				url: url,
				data: parames,
				dataType: 'json',
				beforeSend: function (xhr, status) {
					if (progress) {
						idx = layer.msg('请稍后', { icon: 16, time: timeout });
					}
				},
				success: function (data, status) {
					console.debug(data)
					if (data.code == 0) {
						if (callback) {
							callback(data);
						}
					} else {
						toast.error(data.message, "提示");
					}
					layer.close(idx);
				},
				complete: function (xhr, status) {
				},
				cancel: function () {
				}
			});
		},

		post: function (url, parames, callback, progress) {
			$.ajax({
				type: 'POST',
				url: url,
				data: parames,
				contentType: 'application/json',
				dataType: 'json',
				beforeSend: function (xhr, status) {
					if (progress) {
						idx = layer.msg('请稍后', { icon: 16, time: timeout });
					}
				},
				success: function (data, status) {
					console.debug(data)
					if (data.code == 0) {
						if (callback) {
							callback(data);
						}
					} else {
						toast.error(data.message, "提示");
					}
					layer.close(idx);
				},
				complete: function (xhr, status) {
				},
				cancel: function () {
				}
			});
		},

		form: function (url, parames, callback) {
			layer.confirm('确定提交？', {
				icon: 3,
				title: '提示',
				btn: ['确定', '取消']
			}, function () {
				$.ajax({
					type: 'POST',
					url: url,
					data: parames,
					dataType: 'json',
					beforeSend: function (xhr, status) {
						idx = layer.msg('请稍后', { icon: 16, time: timeout });
					},
					success: function (data, status) {
						console.debug(data)
						if (data.code == 0) {
							if (callback) {
								callback();
							}
						} else {
							toast.error(data.message, "提示");
						}
						layer.close(idx);
					},
					complete: function (xhr, status) {
					},
					cancel: function () {
					}
				});
			});
		},

		delids: function (url, callback) {
			var checkStatus = table.checkStatus(identifier);
			var data = checkStatus.data;
			var ids = data.map(item => item.id).join(",");
			if (ids.length == 0) {
				layer.msg("请选择删除数据");
				toast.error("请选择删除数据", "提示");
				return;
			}
			layer.confirm('确认删除？', {
				icon: 3,
				title: '提示',
				btn: ['确定', '取消']
			}, function (index) {
				idx = index
				mod.post(url, JSON.stringify({ "ids": ids }), callback)
			});
		},

		download: function (url, parames, filename) {
			idx = layer.msg('请稍后', { icon: 16, time: timeout });
			fetch(url, {
				method: "POST",
				body: parames,
				headers: { "Content-Type": "application/json" }
			})
				.then(response => response.blob())
				.then(blob => {
					const url = window.URL.createObjectURL(blob);
					const a = document.createElement("a");
					a.href = url;
					a.download = filename || document.title;
					document.body.appendChild(a);
					a.click();
					a.remove();
					window.URL.revokeObjectURL(url);
					layer.close(idx);
				})
				.catch(error => {
					toast.error(error, "提示");
				});
		},

		upload: function (elem_, url_, accept_, exts_, progress_, done_) {
			data = {
				elem: elem_,
				url: url_ || 'file/upload',
				accept: accept_ || 'file',
				exts: exts_,
				before: function (obj) {
					element.progress('progress_filter', '0%');
					layer.msg('上传中', { icon: 16, time: timeout });
				},
				progress: function (n, elem, e) {
					element.progress('progress_filter', n + '%');
					if (n == 100) {
						layer.msg('上传完毕');
					}
					if (progress_) {
						progress_(n, elem, e);
					}
				},
				done: function (response) {
					layer.msg('上传成功', { icon: 1 });
					if (done_) {
						done_(response);
					}
				},
				error: function () {
					toast.error('上传失败');
				}
			}
			if (exts_ == null) {
				delete data.exts;
			}
			upload.render(data);
		},

		dialog: function (url, h) {
			layer.open({
				type: 2,
				title: false,
				content: [url],
				shade: 0.6,
				resize: true,
				area: ['64%', h],
				closeBtn: 2,
				anim: 0,
				isOutAnim: false,
				scrollbar: false,
				btnAlign: 'r',
				btn: ['提交', '返回'],
				yes: function (index, layero) {
					// 得到iframe页的窗口对象
					// var iframeWin = window[layero.find('iframe')[0]['name']];
					// iframeWin.reset();
					var iframeBody = layer.getChildFrame('body', index);
					iframeBody.find('#submit').click();
				},
				btn2: function (index, layero) {
					tobj.reload();
				}
			});
		},

		open: function (url, w, h) {
			layer.open({
				type: 2,// iframe层
				title: false,//弹层标题
				content: url,//弹层内容
				shade: 0.6,// 遮罩透明度
				shadeClose: true,// 点击遮罩区域，关闭弹层
				resize: true,//右下角允许拖拽
				area: [w, h],// 显示区
				closeBtn: 2,// 关闭图标2
				anim: 0,// 平滑放大
				scrollbar: false,//是否允许浏览器出现滚动条
			});
		},

		refresh: function () {
			// 刷新当前页
			setTimeout(function () {
				document.location = document.location;
			}, 1000)
		}
	};

	// 输出
	exports('tool', mod);
});
