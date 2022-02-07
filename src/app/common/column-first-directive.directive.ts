import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appColumnFirstDirective]'
})
export class ColumnFirstDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
