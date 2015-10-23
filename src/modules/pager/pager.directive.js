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