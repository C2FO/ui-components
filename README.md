# ui-components
C2FO core ui components

## Installing

`npm install --save c2fo-ui-components`

## Documentation

[http://c2fo.github.io/ui-components/]()

## Developer

### Build Project

`grunt build` - Build distribution version of the source code and runs the test suite against it

### Source Bundle

`grunt webpack:dev` - Watcher for webpack source files

### Run Test Suite

`grunt karma:dev` - Watcher for karma tests

### Documentation

Documentation branch - `git co docs`

[https://github.com/tripit/slate]()

### Change Log
* 1.2.0
    * absolute value filter
    * boolean filter
    * documentation tooling via slate
* 1.1.1
    * Match c2fo style guide for module components
    * Add custom filter key functionality for checkboxFilterGroup
    * Add unit controller tests
* 1.0.0
    * Bundle entire core library with webpack. This should be the preferred
    * Convert all modules to use commonjs
    * Output minified/source mapped versions of the less, css, and javascripts
    * Add travis ci integration
    * Add unit testing with karma
    * Add demo test html file. This needs work still
