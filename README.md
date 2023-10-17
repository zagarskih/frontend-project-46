# GenDiff

### Hexlet tests and linter status:
[![Actions Status](https://github.com/zagarskih/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/zagarskih/frontend-project-46/actions)

### Maintainability
[![Maintainability](https://api.codeclimate.com/v1/badges/b87021f4f662c0295fab/maintainability)](https://codeclimate.com/github/zagarskih/frontend-project-46/maintainability)

### Test Coverage
[![Test Coverage](https://api.codeclimate.com/v1/badges/b87021f4f662c0295fab/test_coverage)](https://codeclimate.com/github/zagarskih/frontend-project-46/test_coverage)

## Description
"GenDiff" - is a program that determines the difference between two data structures.

### Utility features:
* Support for different input formats: yaml, json
* Report generation in the form of plain text, stylish and json

### Usage example:
```bash
# plain format
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# stylish format
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

## Requirements
* Node.js > 18.0
* Ubuntu, Macos or WSL (for Windows)

## Install
```bash
git clone git@github.com:zagarskih/frontend-project-46
```
```bash
make install
```
```bash
npm link
```

## Demonstration
### Help:
<a href="https://asciinema.org/a/XU9wMGpg1uPZgi1Ac4TJ4uCLz" target="_blank"><img src="https://asciinema.org/a/XU9wMGpg1uPZgi1Ac4TJ4uCLz.svg" /></a>

### Stylish format:
<a href="https://asciinema.org/a/5aY32mMl5ee8ne3H4SCbjG6Cn" target="_blank"><img src="https://asciinema.org/a/5aY32mMl5ee8ne3H4SCbjG6Cn.svg" /></a>

### Plain format:
<a href="https://asciinema.org/a/7nMYOYgzOMffadU3a9Ple0dSd" target="_blank"><img src="https://asciinema.org/a/7nMYOYgzOMffadU3a9Ple0dSd.svg" /></a>

### JSON format:
<a href="https://asciinema.org/a/Gb89vg4QtZcspiukw5T7M0fJt" target="_blank"><img src="https://asciinema.org/a/Gb89vg4QtZcspiukw5T7M0fJt.svg" /></a>
