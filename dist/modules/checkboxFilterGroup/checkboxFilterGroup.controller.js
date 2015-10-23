'use strict';

module.exports = CheckboxFilterGroupController;

CheckboxFilterGroupController.$inject = ['$timeout'];
function CheckboxFilterGroupController($timeout) {
    var vm = this;

    vm.updateFilter = updateFilter;

    function updateFilter(field) {
        var filterKey = field.filterKey || vm.filterKey,
            filterKeyValues = angular.copy(vm.filter[filterKey] || []),
            fieldValueIndex = filterKeyValues.indexOf(field.value);

        if (vm.multicheck) {
            if (fieldValueIndex === -1) {
                filterKeyValues.push(field.value);
            } else {
                filterKeyValues.splice(fieldValueIndex, 1);
            }
        } else {
            var originalCheckedState = angular.copy(field.isChecked);
            vm.fields.forEach(function (field) {
                field.isChecked = false;
            });

            field.isChecked = originalCheckedState;

            if (fieldValueIndex === -1) {
                filterKeyValues = [field.value];
            } else {
                filterKeyValues = [];
            }
        }

        vm.filter[filterKey] = filterKeyValues;

        $timeout(function () {
            if (vm.onUpdate()) {
                vm.onUpdate()(vm.filter);
            }
        });
    }
}