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
            myKey: []
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
            controller.updateFilter(controller.fields[0]);

            // if execution got here then we are ok
            // just double check the callback function for a null value
            expect(controller.onUpdate).toEqual(null);
        });

        describe('multicheck parameter', function () {
            it("should support a true value", function () {
                controller.multicheck = true;

                controller.fields[0].isChecked = true;
                controller.updateFilter(controller.fields[0]);
                expect(controller.filter).toEqual({
                    myKey: ['yes-value']
                });

                controller.fields[1].isChecked = true;
                controller.updateFilter(controller.fields[1]);
                expect(controller.filter).toEqual({
                    myKey: ['yes-value', 'no-value']
                });

                controller.fields[1].isChecked = false;
                controller.updateFilter(controller.fields[1]);
                expect(controller.filter).toEqual({
                    myKey: ['yes-value']
                });

                controller.fields[0].isChecked = false;
                controller.updateFilter(controller.fields[0]);
                expect(controller.filter).toEqual({
                    myKey: []
                });
            });

            it("should support a false value", function () {
                controller.multicheck = false;

                controller.fields[0].isChecked = true;
                controller.updateFilter(controller.fields[0]);
                expect(controller.filter).toEqual({
                    myKey: ['yes-value']
                });

                controller.fields[1].isChecked = true;
                controller.updateFilter(controller.fields[1]);
                expect(controller.filter).toEqual({
                    myKey: ['no-value']
                });

                // all other fields should have their model set to false
                expect(controller.fields[0].isChecked).toEqual(false);

                controller.fields[1].isChecked = false;
                controller.updateFilter(controller.fields[1]);
                expect(controller.filter).toEqual({
                    myKey: []
                });
            });
        });

        it('should support filterKey overrides from fields', function () {
            controller.multicheck = true;

            controller.fields[0].isChecked = true;
            controller.fields[0].filterKey = 'customFilterKey';
            controller.updateFilter(controller.fields[0]);
            expect(controller.filter).toEqual({
                myKey: [],
                customFilterKey: ['yes-value']
            });

            controller.fields[1].isChecked = true;
            controller.updateFilter(controller.fields[1]);
            expect(controller.filter).toEqual({
                myKey: ['no-value'],
                customFilterKey: ['yes-value']
            });

            controller.fields[0].isChecked = false;
            controller.updateFilter(controller.fields[0]);
            expect(controller.filter).toEqual({
                myKey: ['no-value'],
                customFilterKey: []
            });

            controller.fields[1].isChecked = false;
            controller.updateFilter(controller.fields[1]);
            expect(controller.filter).toEqual({
                myKey: [],
                customFilterKey: []
            });
        });
    });
});