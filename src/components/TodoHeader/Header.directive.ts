import {HeaderCtrl} from './Header.controller';
export class Header implements ng.IDirective {
  scope = {
    onSubmit: '&'
  };
  templateUrl: string = 'src/components/TodoHeader/Header.template.html';
  controllerAs: string = 'header';
  bindToController: boolean = true;
  controller: Function = HeaderCtrl;
}
