"use strict";

var moduleName = 'c2fo.ui.modules.booleanFilter';

angular.module(moduleName, [])
    .filter('boolean', require('./boolean.filter.js'));

module.exports = moduleName;

