import * as TodoActions from '../../actions/todos';

export class App {	
	todos: Array<any>;
	doneCount: number;
	remainingCount: number;
	allChecked: boolean;
	statusFilter: any;
	location: any;
	addTodo: Function;
	
	static $inject = [
		'$scope', 
		'$location', 
		'$ngRedux'
	];
	
	constructor(private $scope: ng.IScope, 
		private $location: ng.ILocationService,
		private $ngRedux) {
			
		let unsubscribe = $ngRedux.connect(
			this.mapStateToThis.bind(this), 
			TodoActions
		)(this);
		
    $scope.$on('$destroy', unsubscribe);
		
		$scope.$watch('app.location.path()', path => this.onPath(path));

		if ($location.path() === '') {
			$location.path('/');
		}
		this.location = $location;
	}
	
	onPath(path: any) {
		this.statusFilter = (path === '/active') ?
			{ completed: false } : (path === '/completed') ?
			{ completed: true } : {};
	}
	
	mapStateToThis(state) {
    return {
      todos: state.todos
    };
  }
}