export class App {	
	todos: Array<any>;
	doneCount: number;
	remainingCount: number;
	allChecked: boolean;
	statusFilter: any;
	location: any;
	
	static $inject = ['$scope', '$location'];
	constructor(private $scope: ng.IScope, private $location: ng.ILocationService) {
		this.todos = [
		  { title: 'complete todomvc app', completed: true }, 
		  { title: 'write blog post', completed: false }
	    ];
		
		$scope.$watch('app.todos', () => this.onTodos(), true);
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
	
	onTodos() {
		this.remainingCount =
		this.todos.filter(todo => !todo.completed).length;
		this.doneCount = this.todos.length - this.remainingCount;
		this.allChecked = !this.remainingCount;
	}
	
	onSubmit(newTodo) {
		this.todos.push({ title: newTodo, completed: false });
	}
}