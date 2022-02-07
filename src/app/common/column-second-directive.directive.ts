import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appColumnSecondDirective]'
})
export class ColumnSecondDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
