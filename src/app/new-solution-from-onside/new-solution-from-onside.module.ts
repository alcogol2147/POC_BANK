import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSolutionFromOnsideRoutingModule } from './new-solution-from-onside-routing.module';
import { NgxtableauComponent } from './ngxtableau/ngxtableau.component';
import { TableauModule } from 'ngx-tableau';
import { GridLayoutSampleComponent } from './grid-layout-sample/grid-layout-sample.component';
import { GridsterModule } from 'angular-gridster2';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxtableauComponent, GridLayoutSampleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NewSolutionFromOnsideRoutingModule,
    FormsModule,
    TableauModule,
    GridsterModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule, MatCheckboxModule, MatSidenavModule, MatListModule,MatSlideToggleModule,MatCardModule,
    MarkdownModule.forRoot({ loader: HttpClient, markedOptions: { provide: MarkedOptions, useValue: { smartypants: true, breaks: true } } })
  ]
})
export class NewSolutionFromOnsideModule { }
