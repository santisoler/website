"""
Use livereload to serve, build, and reload the website when files change.

Obtained from https://github.com/leouieda/cv
"""
from livereload import Server

IGNORE_FILES = [
    "README.md",
    "_build/",
]


def ignore_files(filepath):
    for f in IGNORE_FILES:
        if f in filepath:
            return True
    return False


server = Server()
files = [
    "**/**.md",
    "**/**.html",
    "_site.yml",
    "images/",
    "css/",
    "fonts/",
    "script.js",
    "_layouts/",
    "_python/",
]
for filename in files:
    server.watch(filename, "make clean build", ignore=ignore_files)
server.serve(root="_build", port="8008", host="localhost", open_url_delay=1)
