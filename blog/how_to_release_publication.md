---
title: How to release a peer reviewed publication
layout: blog
---

Recently, my [first publication][/publications/soler2018] (as first author) got accepted
for publication on the Geophysical Journal International.
It's now (or will be) available online on
[doi.org/10.1093/gji/ggz277](https://doi.org/10.1093/gji/ggz277).

After celebrating this achievement, I faced the next step: make the paper public.
Although the paper could get a lot of attention for just being published by the Journal,
most scientists become aware of new publications from other sources.
We also want our publication to be *freely* available for any reader, and of course
*reproducible*.

This second goal was partially satisfied from the first submission date: we developed
all the code and written the manuscript on a
[GitHub repository](https://github.com/pinga-lab/tesseroid-variable-density).
But, from our perspective there are a few things left to be done:
- Assign a DOI (Digital Object Identifier) to a specific release of this GitHub
  repository.
- Upload the manuscript to a preprint archive.

The first step can easily be done creating a new release under
[Zenodo](https://zenodo.org/) or [figshare](https://figshare.com).
Anyone of this two websites lets you upload a set of files, add some metadata and create
a release which will have a DOI assigned.
This allows other scientists to cite your repository through the DOI.
Besides, it creates a permanent archive that will keep your uploaded files online even
if your repository is deleted in the future.
I don't intend to create a comparison between them, so I encourage you to explore them
and choose the one that best fits your needs.

The second step can be done by uploading the manuscript to a preprint archive.
We have chosen [EarthArxiv](https://eartharxiv.org/) because our research was on the
field of Earth Sciences, but you can choose anyone that best fits your needs.
Wikipedia has a very nice
[preprint servers list ordered by
field](https://en.wikipedia.org/wiki/Preprint#Servers_by_field) in case you want to
choose a different one.

Although these two steps seems very easy and quick, there are a lot of minor details you
have to take into account to do so.
Because I don't trust my memory, I wanted to summarize all of them, and why not share
them?


## Profiles

In order to follow the next steps, you will need to have your own profiles on the
following websites:
- [ORCID](https://orcid.org/)
- [Zenodo](https://zenodo.org/) or [figshare](https://figshare.com)
- [EarthArxiv](https://eartharxiv.org/)

So, please take your time to create them before continuing with the following steps.
Would be nice that every co-author of the publication has at least an ORCID and
a figshare profile (the latter is not needed in case you choose Zenodo instead).
This is not mandatory, but having them will make each author name to be clickable,
linking each name with their profile.


## The scenario

So, you have received a new email from the Journal telling you that your publication got
accepted. Congratulations! Take a break, drink a few beers (or any alcoholic or
non-alcoholic beverage of your preference) and celebrate your achievement.

After your organism was able to eliminate all the residues from that celebration, get
ready to work one more time.
The Journal will probably ask you to resubmit the publication without any correction
marks from the reviewers.
So, fix typos and solve those marks, give it a better looking format if you want to, but
**don't submit it yet**.
First, we want to archive our repository, create a DOI for it and cite it inside the
manuscript.

## Archive the repository

- Create a new release on [Zenodo](https://zenodo.org) or
  [figshare](https://figshare.com) and reserve a DOI number for it. Don't upload any
  file and don't make it public yet.
- Cite this recently created DOI (we will call it *repository DOI* in the future) on the
  manuscript.
  You should add a new entry to your BibTex references file:
  ```latex
  @misc{<BITEX KEY>,
      title = {"<TITLE OF YOUR ZENODO/FIGSHARE RELEASE>"},
      howpublished = {<figshare or Zenodo>, available from: https://doi.org/<REPOSITORY DOI>},
      author = {<AUTHORS SEPARATED WITH "and">},
      year = {<DATE>},
      doi = {<REPOSITORY DOI>},
      note = {Accessed <MONTH> <YEAR>}
  }
  ```
  And the following sentence on the body of the manuscript:
  ```latex
  All source code, Python scripts, data, and model results are made available through
  an online repository
  \href{https://doi.org/<REPOSITORY DOI>}{doi.org/<REPOSITORY DOI>}
  \citep{<BIBTEX KEY>} or
  \href{https://github.com/<YOUR GITHUB REPOSITORY>}{github.com/<YOUR GITHUB REPOSITORY>}.
  The repository also contains instructions for replicating all results
  presented here.
  ```
- Add the DOI to the `README.md` file of the repository.
  You could add something like this:
  ```
  This paper has been accepted for publication in *<THE JOURNAL>*.

  An archived version of this repository is available at
  [doi.org/<REPOSITORY DOI>](https://doi.org/<REPOSITORY DOI>)
  ```
  And make sure you explicit that the manuscript is not released under an open-source
  software license or a Creative Commons one. For example:
  ```
  Data and the results of numerical tests are available under the
  [Creative Commons Attribution 4.0 License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

  The manuscript text and figures are not open source. The authors reserve the
  rights to the article content, which has been accepted for publication in
  <THE JOURNAL>.
  ```
- Upload the zip file to Zenodo or figshare and make the public release.
  Remember to **download the zip file from GitHub** (don't archive the cloned repository on
  your computer).
  Also take into account that the only thing that cannot be changed once the release has
  been made is the uploaded files. Its metadata can be changed anytime.
- Tag your repository `HEAD` with `accepted`. Make a GitHub Release if you want to.

Congratulations! Now you are finally ready to resubmit the manuscript to the Journal.


## Upload the manuscript to EarthArxiv

After resubmitting the `accepted` manuscript you'll have to wait around 24 hours for the
Journal to sent you a DOI for the publication.
Although the manuscript won't be online for at least a few weeks, the DOI is already
reserved.
We will call it the *publication DOI* in the future.

EarthArxiv does not make special requests on the format of the manuscript, so you can
freely change the format of the manuscript.
For example, on the [tesseroid with variable density paper][/publications/soler2018.md]
we use the LaTeX article class for the version uploaded to EarthArxiv instead of the GJI
class requested by Geophysical Journal International when submitting your work.

Before uploading your manuscript to EarthArxiv, you should read the Author guidelines of
the Journal, specially the section related to author self-archiving policy.
For example,
[GJI requests you](https://academic.oup.com/journals/pages/access_purchase/rights_and_permissions/author_self_archiving_policy)
to add the following paragraph on the manuscript:
```
This is a pre-copyedited, author-produced version of an article accepted for
publication in [insert journal title] following peer review. The version of record
[insert complete citation information here] is available online at: xxxxxxx [insert URL
and DOI of the article on the OUP website].
```
Check if your Journal have special requests on publicly released preprints and follow
their demands.

It's a good practice to add this lines to the manuscript and to the `README.md`.

Now you are ready to upload the manuscript to EarthArxiv.
After submitting, the manuscript must go through a moderation process until it's
publicly available and a DOI is assigned.

Remember to tag the new `HEAD` of `master` and create a new GitHub release if you want
to.
