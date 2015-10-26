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

# Directives

## Checkbox Filter Group

A group of checkboxes to 

### Module Name

`c2fo.ui.modules.checkboxFilterGroup`

### Parameters

Name | Type | Default | Required | Description
------- | ------- | ------- |  ------- | -----------
label | String | undefined | false | The string representation of checkbox group's title.
fields | Array | undefined | true | An array of field objects. Each field can write to it's own "filter-key" by setting an optional attribute of filterKey within the field declaration.
filter | Object | undefined | true | The filter reference object.
filter-key | String | undefined | true | The filter object key to store values in. Values will always be stored in an array format. 
multicheck | Boolean | false | false | Setting multicheck to false let's the filter group act as a radio button group (only one value can be selected at a time). Setting multicheck to true allows multiple values to be selected and stored.
on-update | Function | undefined | false | Optional callback for when a checkbox is selected.

### Usage (Javascript)

```js
angular.module('app', ['c2fo.ui.modules.checkboxFilterGroup']).controller(AppController);

AppController.$inject = [];
function AppController() {
  var vm = this;
  
  /*
   * If all of these fields were checked then the output would like. 
   
      vm.filter => {
        custom-filter-key: ['new-value']
        status: ['approved-value', peer-reviewed-value, 'closed-value']
      }
      
   * By applying a filterKey in the field declaration you can override the base group value and group things
   * that may have semantic meaning to the end user, but don't correlate together in your system.
   */
  vm.fields = [
    { label: 'New', value: 'new-value', filterKey: 'custom-filter-key'},
    { label: 'Approved', value: 'approved-value'},
    { label: 'Peer Reviewed', value: 'peer-reviewed-value'},
    { label: 'Closed', value: 'closed-value'}
  ]
  
  vm.filter = {};
  
  vm.onUpdate = onUpdate;
  
  function onUpdate() {
    console.log(vm.filter);
  }
}
```

### Usage (HTML View)

```html
<c2fo-checkbox-filter-group
  label="Status"
  fields="appCtrl.fields"
  filter="appCtrl.filter"
  filter-key="status"
  multicheck="true"
  on-update="appCtrl.onUpdate">
</c2fo-checkbox-filter-group>
```

## Pager

Data list pagination helper.

### Module Name

`c2fo.ui.modules.pager`

### Parameters

Name | Type | Default | Required | Description
------- | ------- | ------- |  ------- | -----------
current-page | Integer | undefined | true | The id for the current dataset page.
previous-page | Integer | undefined | true | The id for the previous dataset page. 
has-previous-page | Boolean | false | true | True if the current dataset has preceding data.
next-page | Integer | undefined | true | The id for next dataset page.
has-next-page | Boolean | false | true | True if the current dataset has more data.
total-pages | Integer | undefined | true | The total number of pages in the dataset.
on-page-change | Function | undefined | true | The callback function for when a page changes. Returns an integer value of page dataset to show.
previous-page-count | Integer | 0 | false | The number of quick links to show for previous pages.
next-page-count | Integer | 0 | false | The number of quick links to show for next pages.

### Usage (Javascript)

```js
angular.module('app', ['c2fo.ui.modules.pager']).controller(AppController);

AppController.$inject = [];
function AppController() {
  var vm = this;
  
  vm.filter = {
    page: 1
  };  
  vm.numPreviousLinks = 3;
  vm.onPageChange = onPageChange;
  
  function onPageChange(pageNumber) {
      vm.filter.page = pageNumber;
      vm.invoices = _getInvoices();
  }
  
  function _getInvoices() {
    return {
      data: [], // invoice data
      meta: {
        currentPage: 4,
        totalPages: 22,
        hasPreviousPage: true,
        previousPage: 3,
        hasNextPage: true,
        nextPage: 5
      }
    }
  }
}

```

### Usage (HTML View)

```html

<c2fo-pager
    current-page="appCtrl.invoices.meta.currentPage"
    total-pages="appCtrl.invoices.meta.totalPages"
    has-previous-page="appCtrl.invoices.meta.hasPreviousPage"
    previous-page="appCtrl.invoices.meta.previousPage"
    has-next-page="appCtrl.invoices.meta.hasNextPage"
    next-page="appCtrl.invoices.meta.nextPage"
    previous-page-count="appCtrl.numPreviousLinks"
    next-page-count="appCtrl.numPreviousLinks"
    on-page-change="appCtrl.onPageChange">
</c2fo-pager>
```
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