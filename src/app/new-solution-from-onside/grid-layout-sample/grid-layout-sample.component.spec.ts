import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutSampleComponent } from './grid-layout-sample.component';

describe('GridLayoutSampleComponent', () => {
  let component: GridLayoutSampleComponent;
  let fixture: ComponentFixture<GridLayoutSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLayoutSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLayoutSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
