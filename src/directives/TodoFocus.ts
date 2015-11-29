export function todoFocus($timeout: ng.ITimeoutService): ng.IDirective {
	return {
		link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
			$scope.$watch(attributes.todoFocus, newval => {
				if (newval) {
					$timeout(() => element[0].focus(), 0, false);
				}
			});
		}
	};
}
todoFocus.$inject = ['$timeout'];

const ngModule = angular.module('todomvc').directive('todoFocus', todoFocus);

export default ngModule;