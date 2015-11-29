import * as angular from 'angular';
import { combineReducers } from 'redux';
import {App} from './App.controller';
import 'ng-redux';

const ngModule = angular.module('todomvc', ['ngRedux'])
.config(($ngReduxProvider) => {
  
})
.controller('App', App);

export default ngModule;
