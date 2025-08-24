import gradio as gr

# see https://huggingface.co/spaces/gradio/theme_builder

theme = gr.themes.Ocean(
    text_size="sm",
)


def _default_theme():
    return theme
