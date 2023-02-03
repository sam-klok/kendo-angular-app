import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSecondComponent } from './grid-second.component';

describe('GridSecondComponent', () => {
  let component: GridSecondComponent;
  let fixture: ComponentFixture<GridSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
