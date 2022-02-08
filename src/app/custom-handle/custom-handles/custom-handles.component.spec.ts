import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHandlesComponent } from './custom-handles.component';

describe('CustomHandlesComponent', () => {
  let component: CustomHandlesComponent;
  let fixture: ComponentFixture<CustomHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHandlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
