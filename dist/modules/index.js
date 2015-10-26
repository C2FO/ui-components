"use strict";

var moduleName = "c2fo.ui.modules";

angular.module(moduleName, [
    require("./absoluteValueFilter"),
    require("./booleanFilter"),
    require("./checkboxFilterGroup"),
    require("./pager")
]);

module.exports = moduleName;