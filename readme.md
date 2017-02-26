# Notts Developer workshop

This repository contains the source code for the Notts Developer Workshop website.

## What on earth is all this nonsense?

It's a React Web App that builds it's pages from JSON data.  What does that mean?  It will take a little longer to load, but will be super slick when you're running it.  TBH you probably wouldn't notice the load time.

## Why are their two repositories?

One contains the website `NottsDevWorkshop.github.io` and one contains the code `NottsDevWorkshop` for generating the website.

## How the heck do I maintain it?

The data is separate from the presentation.  So every month you should only need to edit the `src/data/events.js` file to add details of the new event.  You may also want to upload the speakers' images, but that's about it.

## What do I need to understand to do this?

You're going to need to understand two things to do this:

1. How to use Git
1. How to edit `json` data in `.js` files.

## Give me some specifics.

1. clone the `NottsDevWorkshop` repository (this one).

    `git clone git@github.com:NottsDevWorkshop/NottsDevWorkshop.git`
1. clone the `NottsDevWorkshop.github.io` repository.

    `git clone git@github.com:NottsDevWorkshop/NottsDevWorkshop.github.io.git`
1. Upload speaker images to `src/images/speakers`.
1. Edit the `src/data/events.js` file.
1. Rebuild website `npm run dist`.
1. Test the site with `npm run test-site`
1. Copy the contents of the `dist/` directory into the root of the `NottsDevWorkshop.github.io` directory.
1. Push the changes back into the repositories.
1. Marvel at the beauty of it all.
