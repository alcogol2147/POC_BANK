import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomHandlesComponent } from './custom-handles.component';

const routes: Routes = [{ path: 'custom-handles', component: CustomHandlesComponent, children: [] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomHandlesRoutingModule { }
