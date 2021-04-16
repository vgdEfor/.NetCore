import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDatatableComponent } from './projects-datatable.component';

describe('ProjectsDatatableComponent', () => {
  let component: ProjectsDatatableComponent;
  let fixture: ComponentFixture<ProjectsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
