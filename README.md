# Simpliest Calendar

This is your traditional wall calendar as an app, in the most simple way i can imagine.

## Features

- Saves data in `indexedDb` for browser/device-dependent calendars.

## Issues

- There is an unexpected result when calculating "today" with different dates and timezones, especially around midnight, which could be solved maybe with `isSameDate` from [data-fns](https://date-fns.org).
- There is an [known iOS Safari related bug](https://bugs.webkit.org/show_bug.cgi?id=238318) where the keyboard disappears and won't come back till you restart iPhone.

## Github Pages

- `npm run build` will build the project to `gh-pages` folder
- Github Actions deploy the latest contents of the folder `gh-pages`

## Color Palette

Using Pantone Color of the Year 2024, Peach Fuzz, `rgb(255, 190, 152)`, `#FFBE98`, to create a palette.
