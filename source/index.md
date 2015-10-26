---
title: C2FO UI Components

toc_footers:
  - <a href='https://github.com/C2FO/ui-components'>Github</a>
  - <a href='https://github.com/C2FO/ui-guide'>C2FO UI Guide</a>
  - <a href='https://github.com/C2FO/angular-styleguide'>Angular Style Guide</a>

search: true
---

# Introduction

The C2FO ui component library is designed to be an all-encompassing library for C2FO ui components. 
Built on top of our [angular-style-guide](https://github.com/C2FO/angular-styleguide)
and [ui-guide](https://github.com/C2FO/ui-guide), the ui component library gives a stable testing 
ground for the shared frontend resources across our applications.

# Getting Started

## Installation

`npm install --save c2fo-ui-components` 

<aside class="warning">It is assumed that you already angular installed.</aside>

## Usage

All modules are available through a bundled script or as commonjs modules. Using the commonjs 
module approach you can pick and choose exactly what modules you need for your use case. 

<aside class="notice">Some component modules have css files associated with them 
and will need to be loaded as well.</aside>

### CommonJS

Recommended loading pattern for enhanced flexbility and debugging capabilities.

```javascript
/*
 * CommonJS
 */
var angular = require('angular');
require('c2fo-ui-components');

// Add the entire ui library as a dependency
angular.module('app', [
  'c2fo.ui'
]);

// Only load a few modules
//  Note: You should only use the required amount of source code if you choose this path.
angular.module('app', [
  'c2fo.ui.modules.pager'
]);
```

### Static

If CommonJS is not avaible then you can you the static bundled source code, 
but a bundled copy of the source code is available for static serving as well.
 
```html
<!--
  Static Bundled HTML
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="/scripts/c2fo-ui-components/dist/c2fo-ui-components.min.css"/>
  </head>
<body class="container">
  <div ng-app="app"></div>
  <script src="/scripts/angular/angular.min.js"></script>
  <script src="/scripts/c2fo-ui-components/dist/c2fo-ui-components.min.js"></script>
  <script>
    angular.module('app', ['c2fo.ui']);
  </script>
</body>
</html>
```

<aside class="notice">All javascript and css files come with associated source maps</aside>

# Filters

## Absolute Value

Return the absolute value of a number.

### Module Name

`c2fo.ui.modules.absoluteValueFilter`

### Parameters

Type | Default | Required | Description
------- | ------- |  ------- | -----------
Number | undefined | true | The number to get the absolute value of.

### Usage

```js
angular.module('app', []).controller(appController);

appController.$inject = ['$filter'];
function appController($filter) {
  $filter('abs')(-7); // 7
}
```

## Boolean

Convert boolean values to string representations.

### Module Name

`c2fo.ui.modules.booleanFilter`

### Parameters
Type | Default | Required | Description
------- | ------- |  ------- | -----------
Varies | undefined | true | The value to convert to a boolean string representation.

### Usage

```js
angular.module('app', []).controller(appController);

appController.$inject = ['$filter'];
function appController($filter) {
  $filter('boolean')({}); // 'T'
  $filter('boolean')([]); // 'T'
  $filter('boolean')(true); // 'T'
  $filter('boolean')(1); // 'T'
  
  $filter('boolean')(''); // 'F'
  $filter('boolean')(false); // 'F'
  $filter('boolean')(0); // 'F'
}
```