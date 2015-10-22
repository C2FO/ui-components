/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var core = __webpack_require__(1),
	    modules =

	angular.module("c2fo.ui", [
	    __webpack_require__(1),
	    __webpack_require__(2)
	]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var moduleName = "c2fo.ui.core";

	angular.module(moduleName, []);

	module.exports = moduleName;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var moduleName = "c2fo.ui.modules";

	angular.module(moduleName, [
	    __webpack_require__(3),
	    __webpack_require__(4)
	]);

	module.exports = moduleName;

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var moduleName = 'c2fo.ui.modules.pager';

	angular.module(moduleName, [])
	    .directive('c2foPager', [function () {
	        return {
	            restrict: 'E',
	            scope: {
	                currentPage: '=',
	                previousPage: '=',
	                hasPreviousPage: '=',
	                previousPageCount: '=',
	                nextPage: '=',
	                hasNextPage: '=',
	                nextPageCount: '=',
	                totalPages: '=',
	                onPageChange: '&'
	            },
	            template: [
	                '<nav>',
	                '   <ul class="pager">',
	                '       <li class="previous" ng-class="{\'disabled\': !pagerCtrl.hasPreviousPage}">',
	                '           <a href="#" ng-click="pagerCtrl.handlePageChange(pagerCtrl.previousPage)">',
	                '               <span aria-hidden="true">&larr;</span>',
	                '               Previous',
	                '           </a>',
	                '       </li>',
	                '       <li ng-repeat="pageNumber in pagerCtrl.range(pagerCtrl.previousPageCount, true) track by $index"',
	                '           ng-show="(pagerCtrl.previousPageCount > 0) && (pagerCtrl.currentPage - (pageNumber + 1)) > 0">',
	                '           <a href="#" ng-click="pagerCtrl.handlePageChange(pagerCtrl.currentPage - (pageNumber + 1))">',
	                '               {{pagerCtrl.currentPage - (pageNumber + 1)}}',
	                '           </a>',
	                '       </li>',
	                '       <li class="active">',
	                '           <a href="#" ng-click="pagerCtrl.currentPage">{{pagerCtrl.currentPage}}</a>',
	                '       </li>',
	                '       <li ng-repeat="pageNumber in pagerCtrl.range(pagerCtrl.nextPageCount) track by $index"',
	                '           ng-show="(pagerCtrl.nextPageCount > 0) && (pagerCtrl.currentPage + (pageNumber + 1)) < pagerCtrl.totalPages">',
	                '           <a href="#" ng-click="pagerCtrl.handlePageChange(pagerCtrl.currentPage + (pageNumber + 1))">',
	                '               {{pagerCtrl.currentPage + (pageNumber + 1)}}',
	                '           </a>',
	                '       </li>',
	                '           <li class="next" ng-class="{\'disabled\': !pagerCtrl.hasNextPage}">',
	                '           <a href="#" ng-click="pagerCtrl.handlePageChange(pagerCtrl.nextPage)">',
	                '               Next',
	                '               <span aria-hidden="true">&rarr;</span>',
	                '           </a>',
	                '       </li>',
	                '   </ul>',
	                '</nav>'
	            ].join('').replace(/\s\s+/g, ''),
	            controller: 'PagerController',
	            controllerAs: 'pagerCtrl',
	            bindToController: true
	        };
	    }])
	    .controller('PagerController', [function () {
	        var vm = this;

	        vm.handlePageChange = handlePageChange;
	        vm.range = range;

	        function handlePageChange(pageNumber) {
	            if (!pageNumber) {
	                return false;
	            }

	            vm.onPageChange()(pageNumber);
	        }

	        function range(num, reverse) {
	            var ret = [];

	            for (var i = 0; i < num; i++) {
	                ret.push(i);
	            }

	            if (reverse) {
	                ret.reverse();
	            }

	            return ret;
	        }
	    }]);

	module.exports = moduleName;

/***/ }
/******/ ]);