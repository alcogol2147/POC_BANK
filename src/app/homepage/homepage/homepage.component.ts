import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { Testcard1Component } from 'src/app/card/testcard1/testcard1.component';
import { Testcard2Component } from 'src/app/card/testcard2/testcard2.component';
import { CardInterface } from 'src/app/common/card-interface';
import { ColumnFirstDirectiveDirective } from 'src/app/common/column-first-directive.directive';
import { ColumnSecondDirectiveDirective } from 'src/app/common/column-second-directive.directive';
import { CommonCard } from '../../common/common-card';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }
  public todo:any;
  public done:any;
  @ViewChild(ColumnFirstDirectiveDirective, { static: true }) columnFirstDirectiveDirective!: ColumnFirstDirectiveDirective
  @ViewChild(ColumnSecondDirectiveDirective, { static: true }) ColumnSecondDirectiveDirective!: ColumnSecondDirectiveDirective
  ngOnInit(): void {
    const viewContainerRef1 = this.columnFirstDirectiveDirective.viewContainerRef;
    viewContainerRef1.clear();
    const testcard1Component = new CommonCard(Testcard1Component);
    viewContainerRef1.createComponent<CardInterface>(this.componentFactoryResolver.resolveComponentFactory(testcard1Component.component));

    const viewContainerRef2 = this.ColumnSecondDirectiveDirective.viewContainerRef;
    viewContainerRef2.clear();
    const testcard2Component = new CommonCard(Testcard2Component);
    viewContainerRef2.createComponent<CardInterface>(this.componentFactoryResolver.resolveComponentFactory(testcard2Component.component));
    this.todo = [testcard1Component];
    this.done = [testcard2Component]
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
