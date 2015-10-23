"use strict";

var moduleName = 'c2fo.ui.modules.pager';

angular.module(moduleName, [])
    .controller('PagerController', require('./pager.controller'))
    .directive('c2foPager', require('./pager.directive'));

module.exports = moduleName;
