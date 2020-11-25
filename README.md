# Source code to build my personal website

[![GitHub Actions](https://github.com/santisoler/website/workflows/build/badge.svg)](https://github.com/santisoler/website/actions)
[![Powered by Urubu](https://img.shields.io/badge/powered_by-urubu-blue.svg)](http://urubu.jandecaluwe.com/)

This is the source code for
[santisoler.github.io](https://santisoler.github.io).


## Dependencies

The website is build using [Urubu](http://urubu.jandecaluwe.com/) (a Python module for
building static websites).
An easy way to get it installed with all its dependencies is through conda environemnts.
Install the [Anaconda](https://www.anaconda.com/) distribution and create a conda
environment from the `environment.yml` file:

```
conda env create -f environment.yml
```

Once all packages have been installed, you can change to the new `urubu` environment
using:

```
conda activate urubu
```


## How to compile and run it locally

Using `make` you can compile the website: Urubu will create a `_build` directory where
the final HTML code of the website will be located.

Then we can run `make serve` to serve the website locally. Open your browser on
http://localhost:8000 to view it.


## Continuous Integration and Deployment

After a new commit is pushed into the `master` branch, the website is automatically
build by [GitHub Actions](https://github.com/features/actions) and deployed into
[santisoler/santisoler.github.io](https://www.github.com/santisoler/santisoler.github.io).
The GitHub actions workflow is configured on `.github/workflows/build.yml`.


## Adding a new publication

When a new publication wants to be uploaded you have to create a Markdown file inside
`publications` folder which should have the following format:

```markdown
---
title: "My article title"
date: <Publication date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
layout: publication
open_access: <true or false>
doi: <doi number of the version of record (not url)>
preprint: <doi number of the preprint (not url)> (optional)
supplement: <doi number of the supplement (not url)> (optional)
repository: <GitHub repository of the publication as username/repository>
journal: <Journal>
thumbnail: <thumbnail filename located on /images>
pdf: <filename of pdf version of the article located on /pdfs> (optional)
inreview: <true or false if the article is undergoing a peer review process>
figure: <filename of abstract figure inside /images>
caption: |
    <caption of the abstract figure, could be divided in several lines>
citation.md: |
    <citation in Markdown format, could be divided in several lines>
---

# Abstract

<insert-abstract>
```

It's a good idea to add a figure and a caption that work as a graphical abstract or
represent the main contribution of the publication. The figure should be added to the
`/images` directory and pass the filename on the `figure` field.

You need to add a thumbnail for the publication that will appear on the pages that lists
all publications. It can be a low resolution version of the abstract figure, and it
should be also included under the `/images` directory. The filename of the thumbnail
should be passed on the `thumbnail` field.

The preferred source for downloading the article is automatically chosen from:
- the article doi,
- the preprint doi, or
- a full PDF version uploaded to the `/pdfs` directory on the website.

If the article has open access, its DOI will be the first choice.
If on the other hand, it has not open access, we will point to the preprint DOI.
When passing a `pdf` we will override everything and make the uploaded PDF version as
the first choice. The `pdf` field should receive the filename of the uploaded PDF file
inside the `/pdfs` directory.

Remember that every filename you enter on the header (`image`, `thumbnail`, `pdf`, etc)
**are not paths** to the files, but filenames.


## Adding a new talk

When a new talk wants to be uploaded you have to create a Markdown file inside
`talks` folder which should have the following format:

```markdown
---
title: <title of the talk>
date: <Presentation date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
layout: talk
event: <name of the scientific event>
event_url: <url of the scientific event>
doi: <doi number of the slides, not the url>
google_slide: <url for google slides obtained from the html code after Publish on Web> (optional)
slides_url: <url for the slides> (optional, use only if google_slide is not
passed. Need image.)
image: <light jpg version of one slide for fast web browsing > (optional, used only if google_slide is not passed)
pdf: <full pdf version of the slides> (optional)
thumbnail: <thumbnail filename located on /images>
license: <license name defined on _site.yml>
---

## Abstract

<insert-abstract>
```

You need to add a thumbnail for the talk that will appear on the pages that lists all
talks. It can be a low resolution version of the first slide, and it should be
included under the `/images` directory. The filename of the thumbnail should be passed
on the `thumbnail` field.

If the slides are stored on Google Slides, it's possible to just append them as
a interactive box that allows to navigate through all slides. You just need to pass
a specific url on the `google_slides` field. In order to get this url you must copy it
from the HTML code obtained after choosing to Publish on Web. Read
[this](https://support.google.com/docs/answer/183965?hl=en) for more information.
If `google_slide` is not defined, then the slides will be replaced by the image passed
on `image`. Either one of both must be passed.

The preferred source to download the slides is from the passed DOI.
If `pdf` is passed, they will be downloaded from a full PDF version of the slides
located on the `/pdfs` directory of the website.

Remember that every filename you enter on the header (`image`, `thumbnail`, `pdf`, etc)
**are not paths** to the files, but filenames.


## Adding a new poster

When a new poster wants to be uploaded you have to create a Markdown file inside
`posters` folder which should have the following format:

```markdown
---
title: <title of the poster>
date: <Presentation date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
layout: poster
repository: <GitHub repository of the poster as username/repository>
meeting: <name of the scientific meeting>
meeting_url: <url of the scientific meeting>
doi: <doi number of the poster, not the url>
image: <light jpg version of the poster for fast web browsing>
pdf: <full pdf version of the poster> (optional, if doi is given it will be downloaded from it)
thumbnail: <thumbnail filename located on /images>
license: <license name defined on _site.yml>
---

## Abstract

<insert-abstract>
```

You need to add a thumbnail for the poster that will appear on the pages that lists all
posters. It can be a low resolution version of the poster, and it should be
included under the `/images` directory. The filename of the thumbnail should be passed
on the `thumbnail` field.

The preferred source to download the poster is from the passed DOI.
If `pdf` is passed, it will be downloaded from a full PDF version of the poster located
on the `/pdfs` directory of the website.

Remember that every filename you enter on the header (`image`, `thumbnail`, `pdf`, etc)
**are not paths** to the files, but filenames.


## Acknowledgments

The source code have been written by [santisoler](https://santisoler.github.io) based on
[Urubu's Quickstart Page](https://github.com/jandecaluwe/urubu-quickstart/) and inspired
on [leouieda.com](https://www.leouieda.com).


## License

This work is licensed under a [Creative Commons Attribution 4.0 International
License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
