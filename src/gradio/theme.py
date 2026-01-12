import gradio as gr

# 主题名称映射（按首字母排序）
theme_mapping = {
    "Base": gr.themes.Base,
    "Citrus": gr.themes.Citrus,
    "Default": gr.themes.Default,
    "Glass": gr.themes.Glass,
    "Monochrome": gr.themes.Monochrome,
    "Ocean": gr.themes.Ocean,
    "Origin": gr.themes.Origin,
    "Soft": gr.themes.Soft,
}


# 获取所有可用主题名称
def get_theme_names():
    return list(theme_mapping.keys()) + ["Custom"]


# 根据主题名称获取主题实例
def get_theme_by_name(theme_name: str):
    if theme_name == "Custom":
        return custom_theme
    elif theme_name in theme_mapping:
        return theme_mapping[theme_name](text_size="sm")  # 默认字体sm
    else:
        return custom_theme


###################### 自定义 ######################
custom_theme = gr.themes.Ocean(
    text_size="sm",
)
###################### 自定义 ######################


# 根据配置返回默认主题
def _default_theme():
    try:
        from src.app import prefs

        cfg = prefs.get()
        theme_name = getattr(cfg.base, "theme", "Custom")
        return get_theme_by_name(theme_name)
    except:
        return custom_theme


if __name__ == "__main__":

    # 1、run `python -m theme.py` to open the theme builder
    # 2、see https://huggingface.co/spaces/gradio/theme_builder

    from gradio import themes as t

    t.builder(inbrowser=True)
