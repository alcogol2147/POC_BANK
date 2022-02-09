import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxtableauComponent } from './ngxtableau.component';

describe('NgxtableauComponent', () => {
  let component: NgxtableauComponent;
  let fixture: ComponentFixture<NgxtableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxtableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxtableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
