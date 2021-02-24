GH-PAGES = ${HOME}/dev/urubu-gh-pages/

all: build

build:
	python -m urubu build
	touch _build/.nojekyll

serve: build
	livereload _build -p 8000

clean:
	rm -rf _build
