import { Component, OnInit } from '@angular/core';
import { VizCreateOptions } from 'ngx-tableau';

@Component({
  selector: 'app-ngxtableau',
  templateUrl: './ngxtableau.component.html',
  styleUrls: ['./ngxtableau.component.scss']
})
export class NgxtableauComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // Splitted Tableau Server URL and Report
 serverUrl = 'https://public.tableau.com';
 report = 'SuperSampleSuperstore/SuperDescriptive';

 // Options
 options: VizCreateOptions = {
   hideTabs: true,
   hideToolbar: true,
   disableUrlActionsPopups: true,
   toolbarPosition: (event) => {
     console.log(event);
   },
   onFirstInteractive: (event) => {
     console.log('I was called', event);
   },
 };

 // Loaded event
 handleOnLoaded = (loaded: any) => console.log('Loaded', loaded);
}
