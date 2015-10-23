"use strict";

var moduleName = 'c2fo.ui.modules.checkboxFilterGroup';

angular.module(moduleName, [])
    .controller('CheckboxFilterGroupController', require('./checkboxFilterGroup.controller'))
    .directive('c2foCheckboxFilterGroup', require('./checkboxFilterGroup.directive'));

module.exports = moduleName;
