export class TodoFooterCtrl {
	location: any;
	todos: Array<TodoItem>;
	
	static $inject = ['$scope', '$location'];
	constructor(private $scope: ng.IScope,
		private $location: ng.ILocationService) {
		this.location = $location;    
    $scope.$watch('footer.location', location => this.location = location);
	}
	
	clearDoneTodos() {
  	this.todos = this.todos = this.todos.filter(todoItem => !todoItem.completed);
  };
}