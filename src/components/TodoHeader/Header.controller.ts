export class HeaderCtrl {
	newTodo: string = '';
	onSubmit: Function;
	
	submit() {
		this.onSubmit({ newTodo: this.newTodo });
		this.newTodo = '';
	}
}