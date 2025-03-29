# coding=utf-8
from pydantic.dataclasses import dataclass


@dataclass
class CBStore:
    _store = {}  # 共享的存储字典

    @classmethod
    def set(cls, key, value):
        cls._store[key] = value

    @classmethod
    def get(cls, key, default=None):
        return cls._store.get(key, default)

    @classmethod
    def delete(cls, key):
        if key in cls._store:
            del cls._store[key]

    @classmethod
    def clear(cls):
        cls._store.clear()

    @classmethod
    def get_all(cls):
        return cls._store.copy()


if __name__ == "__main__":
    # 示例：
    CBStore.set("username", "Alice")
    print(CBStore.get("username"))  # 输出: Alice

    CBStore.set("age", 25)
    print(CBStore.get_all())  # 输出: {'username': 'Alice', 'age': 25}

    CBStore.delete("username")
    print(CBStore.get("username"))  # 输出: None
