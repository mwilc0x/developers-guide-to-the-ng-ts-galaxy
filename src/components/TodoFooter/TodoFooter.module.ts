import * as angular from 'angular';
import {TodoFooter} from './TodoFooter.directive';

const ngModule = angular.module('todomvc').directive('todoFooter', [() => new TodoFooter]);

export default ngModule;