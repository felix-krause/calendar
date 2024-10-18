# Simpliest Calendar
This is your traditional wall calendar as an app, in the most simple way i can imagine.

## Features
- Saves data in `indexedDb` for browser/device-dependent calendars.

## Issues
- There is an unexpected result when calculating "today" with different dates and timezones, especially around midnight, which could be solved maybe with `isSameDate` from [data-fns](https://date-fns.org).

## Github Pages
- 'npm run build --configuration gh-pages` will built the project to `gh-pages`
- Github Actions deploy the contents of the folder `gh-pages` 
