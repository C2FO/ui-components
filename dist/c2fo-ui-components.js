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
	    __webpack_require__(5),
	    __webpack_require__(7),
	    __webpack_require__(10)
	]);

	module.exports = moduleName;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var moduleName = 'c2fo.ui.modules.absoluteValueFilter';

	angular.module(moduleName, [])
	    .filter('abs', __webpack_require__(4));

	module.exports = moduleName;



/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = absoluteValueFilter;

	absoluteValueFilter.$inject = [];
	function absoluteValueFilter() {
	    return function (val) {
	        return Math.abs(val);
	    };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var moduleName = 'c2fo.ui.modules.booleanFilter';

	angular.module(moduleName, [])
	    .filter('boolean', __webpack_require__(6));

	module.exports = moduleName;



/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	BooleanFilter.$inject = [];
	function BooleanFilter() {
	    return function (val) {
	        return !!val ? 'T' : 'F';
	    };
	}

	module.exports = BooleanFilter;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var moduleName = 'c2fo.ui.modules.checkboxFilterGroup';

	angular.module(moduleName, [])
	    .controller('CheckboxFilterGroupController', __webpack_require__(8))
	    .directive('c2foCheckboxFilterGroup', __webpack_require__(9));

	module.exports = moduleName;


/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ },
/* 9 */
/***/ function(module, exports) {

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var moduleName = 'c2fo.ui.modules.pager';

	angular.module(moduleName, [])
	    .controller('PagerController', __webpack_require__(11))
	    .directive('c2foPager', __webpack_require__(12));

	module.exports = moduleName;


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = PagerController;

	PagerController.$inject = [];
	function PagerController() {
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
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	'use strict';

	module.exports = PagerDirective;

	PagerDirective.$inject = [];
	function PagerDirective() {
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
	}

/***/ }
/******/ ]);