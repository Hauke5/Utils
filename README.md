# Utils
Framework agnostic utility functions for use with @hauke5 packages.
Zero dependency, designed to work in both client/browser and node server environments.

## Installation
`npm i @hauke5/utils@latest`

## Overview
### log
Extends the `console.log` output with
- a formatted date prefix for each message
- colored output for different logLevels
- transient outputs that don't add a line feed and will be overwritten by the next log statement
- ability to set a maximum number of characters per line. Messages will be shortend in the middle to accommodate.



### date
- `date`: Formats Dates according to a formatting template

### timing
- `delay`: Returns a `Promise` that resolves after `ms` milliseconds.
- `alarm`: Sets an alarm `at` the specifed datetime, at which `action` is executed.
- `getThrottle`: Returns a `Throttle` function that ensures actions are not called with less than `pace` ms between calls.

### strings
- `adjustLength`: lenght-adjusts a string, either shortening it in the middle, or left padding it to match a length requirement
