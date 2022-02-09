import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridLayoutSampleComponent } from './grid-layout-sample/grid-layout-sample.component';
import { NgxtableauComponent } from './ngxtableau/ngxtableau.component';

const routes: Routes = [{ path: 'new-solution', component: GridLayoutSampleComponent, children: [] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSolutionFromOnsideRoutingModule { }
