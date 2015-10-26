"use strict";

describe('Boolean Filter', function () {
    beforeEach(module('c2fo.ui.modules.booleanFilter'));

    var filter;

    beforeEach(inject(function (_$filter_) {
        filter = _$filter_('boolean');

    }));

    it("should truthy primitives to T", function() {
        expect(filter({})).toEqual('T');
        expect(filter([])).toEqual('T');
        expect(filter(true)).toEqual('T');
        expect(filter(1)).toEqual('T');
    });

    it("should falsy primitives to F", function() {
        expect(filter('')).toEqual('F');
        expect(filter(false)).toEqual('F');
        expect(filter(0)).toEqual('F');
    });
});