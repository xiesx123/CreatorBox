from pathlib import Path

import polib

# 输入输出文件路径
pot_file = Path("static/i18n/messages.pot")
out_file = Path("static/i18n/mapper.txt")

# 获取 msgid 列表
msgids = [entry.msgid for entry in polib.pofile(str(pot_file)) if entry.msgid.strip()]

# 按首词分组
groups = {}
for msgid in msgids:
    first_word = msgid.split("_")[0].split()[0]
    groups.setdefault(first_word, []).append(msgid)

with out_file.open("w", encoding="utf-8") as f:
    f.write("# fmt: off\n")
    f.write("from typing import Callable\n\n")
    f.write("from pydantic import BaseModel\n\n\n")
    f.write("class Babel(BaseModel):\n\n")
    f.write("    _ = staticmethod(lambda x: x)\n\n")

    # ---------------- 字段 ----------------
    for group, items in groups.items():
        f.write(f"    # ---------------- {group} ----------------\n")
        for msgid in items:
            var_name = f"_{msgid.replace(' ', '_')}"
            f.write(f'    {var_name}: str = _("{msgid}")\n')
    f.write("\n")

    # ---------------- 属性 ----------------
    f.write("    # ---------------- 属性 ----------------\n")
    for group, items in groups.items():
        for msgid in items:
            var_name = f"_{msgid.replace(' ', '_')}"
            prop_name = msgid.replace(" ", "_")
            f.write(f"    @property\n")
            f.write(f"    def {prop_name}(self): return self._(self.{var_name})\n")
    f.write("\n")

    # ---------------- 方法 ----------------
    f.write("    # ---------------- 方法 ----------------\n")
    f.write("    def set_translator(self, translator: Callable[[str], str]):\n")
    f.write("        self._ = staticmethod(translator)\n")
    f.write("# fmt: on\n")

print(f"Babel 类已生成到 {out_file}")
