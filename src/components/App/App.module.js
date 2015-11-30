var angular = require('angular');
var App_controller_1 = require('./App.controller');
require('ng-redux');
var ngModule = angular.module('todomvc', ['ngRedux'])
    .controller('App', App_controller_1.App);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ngModule;
//# sourceMappingURL=App.module.js.map