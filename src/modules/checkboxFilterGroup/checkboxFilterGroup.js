'use strict';

var moduleName = 'c2fo.ui.modules.checkboxFilterGroup';

angular.module(moduleName, [])
    .directive('c2foCheckboxFilterGroup', [function () {
        return {
            restrict: 'E',
            scope: {
                label: '@',
                fields: '=',
                filter: '=',
                filterKey: '@',
                multicheck: '=',
                onUpdate: '&'
            },
            template: [
                '<div class="c2fo-ui-checkbox-filter-group">',
                '   <div class="heading">{{checkBoxFilterGroupCtrl.label}}</div>',
                '   <div class="checkbox" ng-repeat="field in checkBoxFilterGroupCtrl.fields">',
                '       <label>',
                '           <input type="checkbox" ng-model="field.isChecked" ng-click="checkBoxFilterGroupCtrl.updateFilter($event)"/>',
                '           {{field.label}}',
                '       </label>',
                '   </div>',
                '</div>'
            ].join('').replace(/\s\s+/g, ''),
            controller: 'CheckboxFilterGroupController',
            controllerAs: 'checkBoxFilterGroupCtrl',
            bindToController: true
        };
    }])
    .controller('CheckboxFilterGroupController', ['$timeout', function ($timeout) {
        var vm = this;

        vm.updateFilter = updateFilter;

        function updateFilter(event) {
            if (vm.multicheck) {
                var values = [];

                vm.fields.forEach(function (field) {
                    if (field.isChecked === true) {
                        values.push(field.value);
                    }
                });
                vm.filter[vm.filterKey] = values;
            } else {
                var filterField = angular.element(event.target).scope().field,
                    isChecked = angular.copy(filterField.isChecked);

                // Flag all fields as not checked
                vm.fields.map(function (field) {
                    field.isChecked = false;
                    return field;
                });

                // Reapply our checked status from a previously cloned value
                filterField.isChecked = isChecked;

                vm.filter[vm.filterKey] = (filterField.isChecked === true) ? [filterField.value] : [];
            }


            $timeout(function () {
                if (vm.onUpdate()) {
                    vm.onUpdate()(vm.filter);
                }
            });
        }
    }]);

module.exports = moduleName;