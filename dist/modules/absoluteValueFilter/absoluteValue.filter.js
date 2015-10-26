"use strict";

module.exports = absoluteValueFilter;

absoluteValueFilter.$inject = [];
function absoluteValueFilter() {
    return function (val) {
        return Math.abs(val);
    };
}