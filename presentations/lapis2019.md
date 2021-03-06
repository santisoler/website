---
title: "Gravitational field of tesseroids with variable density"
layout: presentation
date: 2019-04-01
author: me, agustina, mario, leo
doi: 10.6084/m9.figshare.8242439
license: cc-by
code:
    repo: santisoler/lapis2019
    url: https://github.com/santisoler/lapis2019
meeting:
    name: LAPIS2019
    url: http://lapis2019.fcaglp.unlp.edu.ar/
slides:
thumbnail: /images/lapis2019-thumbnail.jpg
---

# Poster

![Poster](/images/lapis2019.jpg)

# Abstract

We present a new methodology to compute the gravitational fields generated by
tesseroids (spherical prisms) whose density varies with depth according to
an arbitrary continuous function.
It approximates the gravitational fields through the Gauss-Legendre Quadrature along
with two discretization algorithms that automatically control its accuracy by adaptively
dividing the tesseroid into smaller ones.
The first one is a preexisting two dimensional adaptive discretization algorithm that
reduces the errors due to the distance between the tesseroid and the computation point.
The second is a new density-based discretization algorithm that
decreases the errors introduced by the variation of the density function with depth.
The amount of divisions made by each algorithm is indirectly controlled
by two parameters: the distance-size ratio and the delta ratio.
We have obtained analytical solutions for a spherical shell with radially variable
density and compared them to the results of the numerical model for linear,
exponential, and sinusoidal density functions.
These comparisons allowed us to obtain optimal values for the distance-size and
delta ratios that yield an accuracy of 0.1% of the analytical solutions.
The resulting optimal values of distance-size ratio for the gravitational potential and
its gradient are 1 and 2.5, respectively.
The density-based discretization algorithm produces no discretizations in the linear
density case, but a delta ratio of 0.1 is needed for the exponential and the
sinusoidal density functions.
These values can be extrapolated to cover most common use cases.
However, the distance-size and delta ratios can be configured by the user to increase
the accuracy of the results at the expense of computational speed.
Lastly, we apply this new methodology to model the Neuquén Basin, a foreland basin in
Argentina with a maximum depth of over 5000m, using an exponential density function.
