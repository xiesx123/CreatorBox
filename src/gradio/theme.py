import gradio as gr

###################### 主题自定义 ######################
theme = gr.themes.Ocean(
    text_size="sm",
)
###################### 主题自定义 ######################


def _default_theme():
    return theme


if __name__ == "__main__":

    # 1、run `python -m theme.py` to open the theme builder
    # 2、see https://huggingface.co/spaces/gradio/theme_builder

    from gradio import themes as t

    t.builder()
