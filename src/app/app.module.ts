import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColumnFirstDirectiveDirective } from './common/column-first-directive.directive';
import { ColumnSecondDirectiveDirective } from './common/column-second-directive.directive';
import { Testcard1Component } from './card/testcard1/testcard1.component';
import { Testcard2Component } from './card/testcard2/testcard2.component';
import { DragAndDropExampleComponent } from './homepage/drag-and-drop-example/drag-and-drop-example.component';
import { Testcard3Component } from './card/testcard3/testcard3.component';
import { NgxtableauComponent } from './new-solution-from-onside/ngxtableau/ngxtableau.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ColumnFirstDirectiveDirective,
    ColumnSecondDirectiveDirective,
    Testcard1Component,
    Testcard2Component,
    DragAndDropExampleComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
