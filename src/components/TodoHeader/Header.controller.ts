import * as TodoActions from '../../actions/todos';

export class HeaderCtrl {
	newTodo: string = '';
	addTodo: Function;
	
	static $inject = [
		'$scope',  
		'$ngRedux'
	];
	constructor(private $scope: ng.IScope,
		private $ngRedux: ngRedux.INgRedux) {
			
		let unsubscribe = $ngRedux.connect(
			this.mapStateToThis.bind(this), 
			TodoActions
		)(this);
		
		$scope.$on('$destroy', unsubscribe);
	}
	
	submit() {
		this.addTodo(this.newTodo);
		this.newTodo = '';
	}
	
	mapStateToThis(state) {
    return {
      todos: state.todos
    };
  }
}