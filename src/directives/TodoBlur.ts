function todoBlur(): ng.IDirective {
	return {
		link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
			element.bind('blur', () => { $scope.$apply(attributes.todoBlur); });
			$scope.$on('$destroy', () => { element.unbind('blur'); });
		}
	};
}

const ngModule = angular.module('todomvc').directive('todoBlur', todoBlur);

export default ngModule;