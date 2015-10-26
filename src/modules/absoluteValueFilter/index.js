"use strict";

var moduleName = 'c2fo.ui.modules.absoluteValueFilter';

angular.module(moduleName, [])
    .filter('abs', require('./absoluteValue.filter.js'));

module.exports = moduleName;

