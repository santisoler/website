---
title: Gradient-boosted equivalent sources for gridding large gravity and magnetic datasets
date: 2021-04-26
author: me, leo
layout: talk
event: EGU21 General Assembly
event_url: https://egu21.eu/
organizer: European Geoscience Union
organizer_url: https://www.egu.eu/
doi: 10.5194/egusphere-egu21-1276
slides_url: https://doi.org/10.6084/m9.figshare.14461792
image: egu21.png
thumbnail: egu21-thumbnail.jpg
license: cc-by
---

## Abstract

The equivalent source technique is a well known method for interpolating
gravity and magnetic data. It consists in defining a set of finite sources that
generate the same observed field and using them to predict the values of the
field at unobserved locations. The equivalent source technique has some
advantages over general-purpose interpolators: the variation of the field due
to the height of the observation points is taken into account and the predicted
values belong to an harmonic field. These make equivalent sources a more suited
interpolator for any data deriving from a harmonic field (like gravity
disturbances and magnetic anomalies). Nevertheless, it has one drawback: the
computational cost. The process of estimating the coefficients of the sources
that best fit the observed values is very computationally demanding: a Jacobian
matrix with number of observation points times number of sources elements must
be built and then used to fit the source coefficients though a least-squares
method. Increasing the number of data points can make the Jacobian matrix to
grow so large that it cannot fit in computer memory.

We present a gradient-boosting equivalent source method for interpolating large
datasets. In it, we define small subsets of equivalent sources that are fitted
against neighbouring data points. The process is iteratively carried out,
fitting one subset of sources on each iteration to the residual field from
previous iterations. This new method is inspired by the gradient-boosting
technique, mainly used in machine learning solutions.

We show that the gradient-boosted equivalent sources are capable of producing
accurate predictions by testing against synthetic surveys. Moreover, we were
able to grid a gravity dataset from Australia with more than 1.7 million points
on a modest personal computer in less than half an hour.
