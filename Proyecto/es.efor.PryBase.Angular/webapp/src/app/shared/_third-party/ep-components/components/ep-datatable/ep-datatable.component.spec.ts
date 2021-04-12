import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpDatatableComponent } from './ep-datatable.component';

describe('EpDatatableComponent', () => {
  let component: EpDatatableComponent;
  let fixture: ComponentFixture<EpDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
