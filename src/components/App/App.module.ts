import * as angular from 'angular';
import {todos} from '../../reducers/index';
import { combineReducers } from 'redux';
import {App} from './App.controller';
import 'ng-redux';

const ngModule = angular.module('todomvc', ['ngRedux'])
.config(($ngReduxProvider) => {
	let reducer = combineReducers(todos);
  $ngReduxProvider.createStoreWith(reducer, []);
})
.controller('App', App);

export default ngModule;
