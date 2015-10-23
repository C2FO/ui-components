# ui-components
C2FO core ui components

## Installing

`npm install --save c2fo-ui-components`

## Documentation

http://c2fo.github.io/ui-components/docs/

## Developer

### Build Project

`grunt build` - Build distribution version of the source code and runs the test suite against it

### Source Bundle

`grunt webpack:dev` - Watcher for webpack source files

### Run Test Suite

`grunt karma:dev` - Watcher for karma tests

### Github Pages / Documentation
This project uses git submodules and requires extra parameters for cloning to begin work.

```bash
git clone --recursive git@github.com:C2FO/ui-components.git
```

or

```bash    
git clone git@github.com:C2FO/ui-components.git
cd ui-components
git submodule update --init --recursive
```

#### Generating Documentation
yuidoc - http://yui.github.io/yuidoc/

```bash
# Install yuidoc globally. This is preferred by the module.
npm install -g yuidocjs
```

```bash
#### Confirm your changes with the yuidoc server
yuidoc . --server 

#### Build main repo documentation
grunt docs

#### Publish documentation to github pages (c2fo.github.io/ui-components/docs)
grunt publish_gh_pages
```

### Change Log

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
