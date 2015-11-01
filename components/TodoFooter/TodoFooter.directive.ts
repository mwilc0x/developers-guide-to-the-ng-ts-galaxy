import {TodoFooterCtrl} from './TodoFooter.controller';
export class TodoFooter implements ng.IDirective {
  scope = {
    todos: '=',
    doneCount: '=',
    remainingCount: '='
  };
  templateUrl: string = 'components/TodoFooter/TodoFooter.template.html';
  controllerAs: string = 'footer';
  bindToController: boolean = true;
  controller: Function = TodoFooterCtrl;
}
