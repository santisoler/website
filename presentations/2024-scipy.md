---
title: "Pooch: A friend to fetch your data files"
layout: presentation
date: 2024-07-12
author: me
meeting:
    name: SciPy2024
    url: https://scipy2024.scipy.org
code:
    repo: santisoler/scipy2024-pooch
    url: https://github.com/santisoler/scipy2024-pooch
thumbnail: /images/scipy2024.png
license: cc-by
doi: 10.6084/m9.figshare.26312236.v1
---

{%- from "macros.html" import youtube_video -%}


## Watch the talk

{{ youtube_video("https://www.youtube.com/watch?v=91q1Hadl9uI", thumbnail="/images/yt-thumbnails/scipy-2024.jpg") }}


## Abstract

Pooch is a Python library that can download and locally cache files from
the web without hassle. Novices can use it to simply download files
in one line of code and focus on the data.
Package maintainers can use it to provide sample datasets
to their users, in examples and tutorials, as libraries like [SciPy][scipy],
[scikit-image][scikit-image], [napari][napari] and [MetPy][metpy] do.
During this talk, we'll show you how you can use the different features that
Pooch offers and also how you can extend its capabilities by writing your own
downloaders or post-processors.

![Abstract image. Showing Pooch logo along with the title of the talk and
a link to Pooch's website:
https://www.fatiando.org/pooch](/images/2024scipy-pooch.png)

Read [abstract][abstract] in SciPy schedule.

## Description

Tutorials and examples are among the most critical assets that scientific
Python libraries have to drive the adoption of their tools by the community.
They usually require some sample datasets to demonstrate the capabilities
of their packages and to show how they can be used in comprehensive workflows.
These datasets should be readily available to the users so that they can focus
on learning and not micromanaging file downloads.
Shipping these data files along with the software is cumbersome, and makes the
packages larger than needed.
Alternatively, they could be hosted in a different location, which
introduces the need for an easy way to access them.

[Pooch][pooch] is a slim, pure Python library that allows you to download and
cache files from the web.
It is specifically designed to provide package developers with an easy way to
make their sample datasets available to their users, while also providing extra
features that make it useful in many other scenarios.


With the [`pooch.retrieve()`][pooch.retrieve] function we can download a file
from the web, check its integrity through its checksum, cache it locally in the
desired location, and finally get the path to that file.
If the file has already been downloaded, the function will avoid re-downloading
and simply return its path.

To manage the download of multiple data files, we make use of the
[`pooch.Pooch`][pooch.Pooch] class, which can keep a record of the available
files for download through a *registry*: a dictionary with all remote files and
their hashes.
Then these files can easily be downloaded and cached through the
[`Pooch.fetch()`][Pooch.fetch] method.
The [`Pooch`][pooch.Pooch] class is particularly useful for package
maintainers who want to provide an easy way to download sample datasets for
their libraries, as it supports ways to separate the cached data files for
different versions of their packages.

[Pooch][pooch] supports downloading files using different protocols, like HTTP
and FTP.
It can also download files from repositories like
[Zenodo][zenodo], [figshare][figshare], and [dataverse][dataverse] directly
through their [DOI (Digital object identifier)][doi].
It also offers a simple way to perform post-download tasks through
*post-processors*. Pooch already includes built-in post-processor classes for
unpacking zip and tar archives and decompressing files.
Its modular design allows us to plug in custom downloaders, so we can make it
work with other protocols or APIs, or custom post-processors, to carry out any
required task after the files have been downloaded.


Pooch was created as part of the [Fatiando a Terra][fatiando] project,
a community that develops open-source Python tools for geosciences.
It started as a collaboration between [Fatiando a Terra][fatiando] and
[MetPy][metpy] to standardize how sample datasets are downloaded for gallery
examples and tutorials.
It became popular among the scientific Python community, and nowadays it is
being used by projects like [SciPy][scipy], [scikit-image][scikit-image],
[napari][napari] and [MNE Tools][mne-tools], among others.
Pooch has proved to be useful when running live-coding tutorials, as it allows
instructors and attendees to get their hands on the data without any frills,
and also ensures that they have obtained the right data file.

A peer-reviewed paper about Pooch was published in the [Journal of Open Source
Software][joss] (doi: [10.21105/joss.01943][pooch-doi]), and presented in
a [lightning-talk][pycascades-pooch] at [PyCascades 2023][pycascades2023].


During this talk, we'll show you how you can use the different features that
Pooch offers and also discuss how you can extend its capabilities by writing
your custom downloaders or post-processors.


[fatiando]: https://www.fatiando.org
[pooch]: https://www.fatiando.org/pooch
[pooch.retrieve]: https://www.fatiando.org/pooch/v1.8.1/api/generated/pooch.retrieve.html
[pooch.pooch]: https://www.fatiando.org/pooch/v1.8.1/api/generated/pooch.Pooch.html
[pooch.fetch]: https://www.fatiando.org/pooch/v1.8.1/api/generated/pooch.Pooch.html#pooch.Pooch.fetch
[metpy]: https://unidata.github.io/MetPy
[napari]: https://napari.org
[scipy]: https://scipy.org
[scikit-image]: https://scikit-image.org
[doi]: https://en.wikipedia.org/wiki/Digital_object_identifier
[zenodo]: https://zenodo.org/
[figshare]: https://figshare.com/
[dataverse]: https://dataverse.org/
[mne-tools]: https://mne.tools
[joss]: https://joss.theoj.org/
[pooch-doi]: https://doi.org/10.21105/joss.01943
[pycascades2023]: https://2023.pycascades.com/
[pycascades-pooch]: https://www.youtube.com/watch?v=KvxBc4xUMyg
[abstract]: https://cfp.scipy.org/2024/talk/AWFAQF
