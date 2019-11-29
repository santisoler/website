# Source code to build my personal website

[![Travis CI Status](https://img.shields.io/travis/santisoler/website/master.svg?style=for-the-badge)](https://travis-ci.org/santisoler/website)
[![Powered by Urubu](https://img.shields.io/badge/powered_by-urubu-blue.svg?style=for-the-badge)](http://urubu.jandecaluwe.com/)

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
build by [Travis CI](https://travis-ci.org) and deployed into
[santisoler/santisoler.github.io](https://www.github.com/santisoler/santisoler.github.io) by [`doctr`](https://drdoctr.github.io).
This process is configured inside the `.travis.yml` file.

Old versions of the website used to maintain `ci` scripts (mainly written by
[leouieda](https://www.leouieda.com)) in order to deploy the website. They were replaced
by [`doctr`](https://drdoctr.github.io), making this process much easier.

## Adding a new publication

When a new publication wants to be uploaded you have to create a Markdown file inside
`publications` folder which should have the following format:

```markdown
---
title: "My article title"
date: <Publication date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
layout: publication
doi: <doi number of the version of record (not url)>
preprint: <doi number of the preprint (not url)>
supplement: <doi number of the supplement (not url)>
repository: <GitHub repository of the publication as username/repository>
journal: <Journal>
thumbnail: <thumbnail filename located on /images>
pdf: <filename of pdf version of the article located on /pdf>
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

Remember that every filename you enter on the header (`thumbnail`, `pdf`, etc) **are not
paths** to the files.


## Adding a new talk

When a new taltalk wants to be uploaded you have to create a Markdown file inside
`talks` folder which should have the following format:

```markdown
---
title: <title of the talk>
date: <Presentation date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
layout: talk
meeting: <name of the scientific meeting>
meeting_url: <url of the scientific meeting>
doi: <doi number of the slides, not the url>
google_slide: <url for google slides obtained from the html code after Publish on Web>
image: <light jpg version of one slide for fast web browsing (optional)>
pdf: <full pdf version of the slides>
thumbnail: <thumbnail filename located on /images>
license: <license name defined on _site.yml>
---

## Abstract

<insert-abstract>
```

In order to get the url to the Google Slides you must copy it from the HTML code
obtained after choosing to Publish on Web.
Read [this](https://support.google.com/docs/answer/183965?hl=en) for more information.
If `google_slide` is not defined, then the slides will be replaced by the image passed
on `image`. One of both must be passed.


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
pdf: <full pdf version of the poster>
thumbnail: <thumbnail filename located on /images>
license: <license name defined on _site.yml>
---

## Abstract

<insert-abstract>
```

Remember that every filename you enter on the header (`thumbnail`, `pdf`, etc) **are not
paths** to the files.



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
