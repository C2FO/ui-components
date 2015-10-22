"use strict";

var moduleName = "c2fo.ui.modules";

angular.module(moduleName, [
    require("./checkboxFilterGroup/checkboxFilterGroup.js"),
    require("./pager/pager.js")
]);

module.exports = moduleName;