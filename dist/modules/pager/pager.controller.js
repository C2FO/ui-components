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