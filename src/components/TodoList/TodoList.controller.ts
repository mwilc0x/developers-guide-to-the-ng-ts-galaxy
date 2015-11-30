import * as TodoActions from '../../actions/todos';

export class TodoListCtrl {
  editedTodo: TodoItem;
  todos: Array<TodoItem>;
  deleteTodo: Function;
  
  static $inject = ['$scope', '$log', '$ngRedux'];
  constructor(private $scope, private $log, private $ngRedux) {
    let unsubscribe = $ngRedux.connect(
      this.mapStateToThis.bind(this), 
      TodoActions
    )(this);
    
    $scope.$on('$destroy', unsubscribe);
  }
	
  editTodo(todoItem: TodoItem) { }
	
  removeTodo(todo: TodoItem) {
    this.deleteTodo(todo.id);
  }
  
  doneEditing(todoItem: TodoItem) {
    this.editedTodo = null;
    todoItem.title = todoItem.title.trim();
    
    if (!todoItem.title) {
      this.removeTodo(todoItem);
    }
  }
  mapStateToThis(state) {
    return {};
  }
}
