import * as angular from 'angular';
import {TodoList} from './TodoList.directive';

const ngModule = angular.module('todomvc').directive('todoList', [() => new TodoList]);

export default ngModule;