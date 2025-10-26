import gradio as gr

# 主题
default_themes = [
    gr.themes.Base,
    gr.themes.Default,
    gr.themes.Soft,
    gr.themes.Monochrome,
    gr.themes.Glass,
    gr.themes.Origin,
    gr.themes.Citrus,
    gr.themes.Ocean,
]

###################### 自定义 ######################
custom_theme = gr.themes.Ocean(
    text_size="sm",
)
###################### 自定义 ######################


def _default_theme():
    return custom_theme


if __name__ == "__main__":

    # 1、run `python -m theme.py` to open the theme builder
    # 2、see https://huggingface.co/spaces/gradio/theme_builder

    from gradio import themes as t

    t.builder()
