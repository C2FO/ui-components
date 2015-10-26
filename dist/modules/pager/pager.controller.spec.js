"use strict";

describe('Pager Controller', function () {
    beforeEach(module('c2fo.ui.modules.pager'));

    var controller,
        scope;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the
        // parameter names when matching
        var $controller = _$controller_;

        scope = {};
        controller = $controller('PagerController', {$scope: scope});
    }));

    describe('range()', function () {
        it('should create a range of iteratees', function () {
            expect(controller.range(5)).toEqual([0, 1, 2, 3, 4]);
        });

        it('should create a range of iteratees in reverse', function () {
            expect(controller.range(5, true)).toEqual([4, 3, 2, 1, 0]);
        });
    });

    describe('handlePageChange()', function () {
        it('should return false on invalid page', function () {
            expect(controller.handlePageChange(null)).toEqual(false);
        });

        it('should fire onPageChange() when successful', function () {
            controller.onPageChange = function () {
                return function (pageNumber) {
                    expect(pageNumber).toEqual(45);
                    //count = pageNumber;
                };
            };

            controller.handlePageChange(45);
        });
    });
});