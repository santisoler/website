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
conda env create
```

Once all packages have been installed, you can change to the new `urubu` environment
using:

```
source activate urubu
```


## How to compile and run it locally

Using `make` you can compile the website: Urubu will create a `_build` directory where
the final HTML code of the website will be located.

Then we can run `make serve` to serve the website locally. Open your browser on
http://localhost:8000 to view it.


## Continuous Integration and Deployment

After a new commit is pushed into the `master` branch, the website is automatically
build by Travis CI and deployed into
[santisoler/santisoler.github.io](https://www.github.com/santisoler/santisoler.github.io).
This is done through `.travis.yml` configuration file and the scripts inside `ci`. The
latter have been written by [leouieda](https://www.leouieda.com).
I'd like to thank him for spare me some work and a few headaches.

> **Personal reminder:** *never try to reinvent the wheel*.

If you want to implement any Travis CI deployment, I heavily recommend reading the
[Encription keys](https://docs.travis-ci.com/user/encryption-keys/) entry at Travis CI
documentation.

> **Remember to use the repository *from* which the CI will be carried out when
creating encription keys**


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