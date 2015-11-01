export class TodoListCtrl {
	editedTodo: TodoItem;
	todos: Array<TodoItem>;
	
	editTodo(todoItem: TodoItem) {
		this.editedTodo = todoItem;
	}
	
	removeTodo(todo: TodoItem) {
		this.todos.splice(this.todos.indexOf(todo), 1);
	}
	
	doneEditing(todoItem: TodoItem) {
		this.editedTodo = null;
		todoItem.title = todoItem.title.trim();
		if (!todoItem.title) {
			this.removeTodo(todoItem);
		}
	}
}