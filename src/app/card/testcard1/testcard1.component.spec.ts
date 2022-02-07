import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcard1Component } from './testcard1.component';

describe('Testcard1Component', () => {
  let component: Testcard1Component;
  let fixture: ComponentFixture<Testcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
