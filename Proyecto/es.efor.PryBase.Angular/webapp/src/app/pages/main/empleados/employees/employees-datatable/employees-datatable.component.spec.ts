import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDatatableComponent } from './employees-datatable.component';

describe('EmployeesDatatableComponent', () => {
  let component: EmployeesDatatableComponent;
  let fixture: ComponentFixture<EmployeesDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
