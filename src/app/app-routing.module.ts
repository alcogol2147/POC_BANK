import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropExampleComponent } from './homepage/drag-and-drop-example/drag-and-drop-example.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { CustomHandlesModule } from './custom-handle/custom-handles/custom-handles.module';
import { NewSolutionFromOnsideModule } from './new-solution-from-onside/new-solution-from-onside.module';


const routes: Routes = [{ path: '', component: HomepageComponent, children: [] },
{ path: 'drag', component: DragAndDropExampleComponent, children: [] },
{ path: 'newdrag', redirectTo: 'custom-handles' },
{ path: 'newsolution', redirectTo: 'new-solution' }];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    CustomHandlesModule,
    NewSolutionFromOnsideModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
