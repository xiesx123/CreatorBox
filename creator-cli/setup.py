#coding=utf-8
import os
import sys
from setuptools import setup, find_packages

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'script')))

with open('requirements.txt') as f:
    requirements = f.read().splitlines()

setup(
    name='creatorbox',
    version='1.0.5',
    packages=find_packages(where='script'),
    package_dir={'': 'script'},
    install_requires=requirements,
    entry_points={
        'console_scripts': [
            'cb=_cli:cli',
        ],
    },
)