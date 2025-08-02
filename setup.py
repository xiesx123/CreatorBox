from pathlib import Path

import setuptools


def load_requirements():
    exclude = ["torch", "torchaudio", "torchvision", "audio_separator"]
    with open("requirements.txt") as f:
        lines = f.read().splitlines()
    filtered = [line for line in lines if line.strip() and not line.strip().startswith("#") and not any(line.strip().startswith(pkg) for pkg in exclude)]
    return filtered


setuptools.setup(
    name="creatorbox",
    version="1.0.16",
    author="xiesx123",
    author_email="xiesx123@gmail.com",
    description="🚀🎬 Flexible, efficient, and scalable toolbox for editing and dubbing, unleashing creative potential",
    long_description=Path("README.md").read_text(encoding="utf-8"),
    long_description_content_type="text/markdown",
    url="https://github.com/xiesx123/CreatorBox",
    python_requires=">=3.11",
    install_requires=load_requirements(),
    extras_require={
        "cpu": [
            "torch==2.6.0",
            "torchaudio==2.6.0",
            "torchvision==0.21.0",
            "audio_separator[cpu]==0.30.2",
        ],
        "gpu": [
            "torch==2.6.0+cu124",
            "torchaudio==2.6.0+cu124",
            "torchvision==0.21.0+cu124",
            "audio_separator[gpu]==0.30.2",
        ],
        "dev": [
            "autoflake",
        ],
    },
    classifiers=[
        "Programming Language :: Python :: 3.11",
        "Operating System :: OS Independent",
    ],
)
