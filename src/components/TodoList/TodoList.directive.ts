import {TodoListCtrl} from './TodoList.controller';
export class TodoList implements ng.IDirective {
  scope = {
    todos: '=',
    statusFilter: '='
  };
  templateUrl: string = 'src/components/TodoList/TodoList.template.html';
  controllerAs: string = 'list';
  bindToController: boolean = true;
  controller: Function = TodoListCtrl;
}
