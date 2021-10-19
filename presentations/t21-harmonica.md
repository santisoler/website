---
title: "Tutorial: Processing gravity and magnetic data with Harmonica"
template: presentation.html
date: 2021-04-22
author: me, andrea, agustina
meeting:
    name: Transform21
    url: https://softwareunderground.org/events/transform-2021
organizer:
    name: Software Underground
    url: https://softwareunderground.org/
thumbnail: /images/swung-thumbnail.png
license: cc-by
---
{%- from "macros.html" import youtube_video -%}


# Tutorial video

{{ youtube_video("https://www.youtube-nocookie.com/embed/0bxZcCAr6bw") }}

## About

In this tutorial we’ll take a tour around Harmonica, a Python library for
forward modelling, inversion and processing gravity data, focusing on the
processing workflow. We will start with a real dataset of scattered gravity
observations and finally produce a regular grid of the Bouguer gravity
disturbance. We will accomplish this by following these steps:

* Load the gravity dataset.
* Compute gravity disturbance by removing the normal gravity through Boule.
* Project the data to plain coordinates.
* Load a digital elevation model (DEM) of the survey area.
* Compute Bouguer gravity disturbance by forward modelling the topography with prisms.
* Interpolate the Bouguer gravity disturbance onto a regular grid at a constant
  height through the equivalent layer technique.
* Obtain the Bouguer gravity disturbance on a profile using the same equivalent layer.

