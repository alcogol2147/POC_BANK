import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcard3Component } from './testcard3.component';

describe('Testcard3Component', () => {
  let component: Testcard3Component;
  let fixture: ComponentFixture<Testcard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
