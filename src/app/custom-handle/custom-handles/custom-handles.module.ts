import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomHandlesRoutingModule } from './custom-handles-routing.module';
import { CustomHandlesComponent } from './custom-handles.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { MatIconModule } from '@angular/material/icon'
import { Testcard1Component } from 'src/app/card/testcard1/testcard1.component';
import { Testcard2Component } from 'src/app/card/testcard2/testcard2.component';
import { Testcard3Component } from 'src/app/card/testcard3/testcard3.component';

@NgModule({
  declarations: [CustomHandlesComponent,Testcard3Component],
  imports: [
    CommonModule,
    CustomHandlesRoutingModule,
    MatIconModule,
    KtdGridModule
  ]
})
export class CustomHandlesModule { }
