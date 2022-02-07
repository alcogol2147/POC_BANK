import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/common/card-interface';

@Component({
  selector: 'app-testcard1',
  templateUrl: './testcard1.component.html',
  styleUrls: ['./testcard1.component.css']
})
export class Testcard1Component implements OnInit, CardInterface {

  constructor() { }

  ngOnInit(): void {
  }

}
