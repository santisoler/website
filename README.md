# Source code to build my personal website

[![GitHub Actions](https://github.com/santisoler/website/workflows/build/badge.svg)](https://github.com/santisoler/website/actions)
[![Powered by Urubu](https://img.shields.io/badge/powered_by-urubu-blue.svg)](http://urubu.jandecaluwe.com/)

This is the source code for
[www.santisoler.com](https://www.santisoler.com).


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
title: <title of the article>
layout: publication
date: <publication date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
inreview: <true or false>
journal:
    name: <name of the journal>
    url: <url of the journal website>
    doi: <doi of the version of record (not url, just doi)>
    open_access: false <true if the article is open access>
preprint:
    archive: <name of the archive for the preprint>
    url: <url of the archive website>
    doi: <doi of the preprint (not url, just doi)>
code:
    repo: <name of the repository with code (eg user/repo-name)>
    url: <url of the repository>
supplement:
    doi: <doi of the supplementary material (not url, just doi)>
download: <preprint or journal>
thumbnail: <path to thumbnail image (eg /image/foo.jpg)>
citation.md: |
    Citation of the article in Markdown
---
```

You need to add a thumbnail for the publication that will appear on the pages
that lists all publications. The path to the thumbnail should be passed to the
`thumbnail` entry.

We can change the behaviour of the _Download_ button by specifying the source
for the article through the `download` entry. We could pass `preprint` or
`journal`. If `download` is empty, the button won't be created.

We can specify if the article is under peer-review process by passing `inreview`
as `true`.


## Adding a new presentation

```markdown
---
title: <title of the presentation>
layout: presentation
date: <date in YYYY-MM-DD>
author: <comma separated authors defined in _site.yml>
meeting:
    name: <name of the scientific meeting where it was presented>
    url: <url of the meeting or event>
organizer:
    name: <institution that organizes the meeting or event>
    url: <url of the organizer>
code:
    repo: <name of the repository with code (eg user/repo-name)>
    url: <url of the repository>
thumbnail: <path to thumbnail image (eg /image/foo.jpg)>
license: <license as defined in _site.yml (eg cc-by)>
---
```

## Adding a new teaching entry

```markdown
---
title: <Title of the course>
layout: teaching
date: <start date in YYYY-MM-DD>
end_date: <date when the course ended (optional)>
author: <comma separated authors defined in _site.yml>
institution:
    name: <name of the institution>
    url: <url of the institution>
website:
    name: <website of the course material>
    url: <url to the course website>
thumbnail: <path to thumbnail image (eg /image/foo.jpg)>
---
```

## Acknowledgments

The source code have been written by [santisoler](https://www.santisoler.com) based on
[Urubu's Quickstart Page](https://github.com/jandecaluwe/urubu-quickstart/) and inspired
on [leouieda.com](https://www.leouieda.com).


## License

This work is licensed under a [Creative Commons Attribution 4.0 International
License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
