import * as angular from 'angular';
import {Header} from './Header.directive';

const ngModule = angular.module('todomvc').directive('todoHeader', [() => new Header]);

export default ngModule;