'use strict';

module.exports = CheckboxFilterGroupDirective;

CheckboxFilterGroupDirective.$inject = [];
function CheckboxFilterGroupDirective() {
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
            '   <div class="heading"><b>{{checkBoxFilterGroupCtrl.label}}</b></div>',
            '   <div class="checkbox" ng-repeat="field in checkBoxFilterGroupCtrl.fields">',
            '       <label>',
            '           <input type="checkbox" ng-model="field.isChecked" ng-click="checkBoxFilterGroupCtrl.updateFilter(field)"/>',
            '           {{field.label}}',
            '       </label>',
            '   </div>',
            '</div>'
        ].join('').replace(/\s\s+/g, ''),
        controller: 'CheckboxFilterGroupController',
        controllerAs: 'checkBoxFilterGroupCtrl',
        bindToController: true
    };
}