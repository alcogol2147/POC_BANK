import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/common/card-interface';

@Component({
  selector: 'app-testcard2',
  templateUrl: './testcard2.component.html',
  styleUrls: ['./testcard2.component.css']
})
export class Testcard2Component implements OnInit,CardInterface {

  constructor() { }

  ngOnInit(): void {
  }

}
