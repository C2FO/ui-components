"use strict";

BooleanFilter.$inject = [];
function BooleanFilter() {
    return function (val) {
        return !!val ? 'T' : 'F';
    };
}

module.exports = BooleanFilter;
