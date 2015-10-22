"use strict";

describe('Checkbox Filter Group Controller', function () {
    beforeEach(module('c2fo.ui'));

    var controller,
        scope;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the
        // parameter names when matching
        var $controller = _$controller_;

        scope = {};
        controller = $controller('CheckboxFilterGroupController', {$scope: scope});
        controller.filter = {
            myKey: null
        };

        controller.fields = [
            {label: 'Yes', value: 'yes-value'},
            {label: 'No', value: 'no-value'}
        ];
        controller.filterKey = 'myKey';
        controller.onUpdate = function () {
            return function () {
                return true;
            };
        }
    }));


    describe('updateFilter()', function () {
        it('should support optional onUpdate() parameter', function () {
            controller.multicheck = true;
            controller.onUpdate = null;
            controller.updateFilter();

            // if execution got here then we are ok
            // just double check the callback function for a null value
            expect(controller.onUpdate).toEqual(null);
        });

        it('should support multicheck parameter', function () {
            controller.multicheck = true;
            controller.fields.map(function (field) {
                field.isChecked = true;
                return field;
            });
            controller.updateFilter();
            expect(controller.filter).toEqual({
                myKey: ['yes-value', 'no-value']
            });
        });
    });
});