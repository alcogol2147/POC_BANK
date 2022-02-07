import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcard2Component } from './testcard2.component';

describe('Testcard2Component', () => {
  let component: Testcard2Component;
  let fixture: ComponentFixture<Testcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
