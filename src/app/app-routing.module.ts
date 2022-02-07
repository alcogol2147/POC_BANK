import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropExampleComponent } from './homepage/drag-and-drop-example/drag-and-drop-example.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [{ path: '', component: HomepageComponent, children: [] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
