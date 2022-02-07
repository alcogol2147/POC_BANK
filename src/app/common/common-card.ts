import { Component, Type } from '@angular/core';
import { CardInterface } from './card-interface';
export class CommonCard {
    constructor(public component:Type<CardInterface>){}
}
