"use strict";

describe('Absolute Value Filter', function () {
    beforeEach(module('c2fo.ui.modules.absoluteValueFilter'));

    var filter;

    beforeEach(inject(function (_$filter_) {
        filter = _$filter_('abs');
    }));

    it("should convert negative numbers to positive numbers", function() {
        expect(filter(-7)).toEqual(7);
    });

    it("should ignore positive numbers", function() {
        expect(filter(7)).toEqual(7);
    });
});