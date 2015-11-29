var TodoFooterCtrl = (function () {
    function TodoFooterCtrl($scope, $location) {
        var _this = this;
        this.$scope = $scope;
        this.$location = $location;
        this.location = $location;
        $scope.$watch('footer.location', function (location) { return _this.location = location; });
    }
    TodoFooterCtrl.prototype.clearDoneTodos = function () {
        this.todos = this.todos = this.todos.filter(function (todoItem) { return !todoItem.completed; });
    };
    ;
    TodoFooterCtrl.$inject = ['$scope', '$location'];
    return TodoFooterCtrl;
})();
exports.TodoFooterCtrl = TodoFooterCtrl;
//# sourceMappingURL=TodoFooter.controller.js.map