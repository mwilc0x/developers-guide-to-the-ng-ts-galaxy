import * as angular from 'angular';
import {App} from './App.controller';

const ngModule = angular.module('todomvc', [])
.controller('App', App);
export default ngModule;