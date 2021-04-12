import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTranslatorComponent } from './array-translator.component';

describe('ArrayTranslatorComponent', () => {
  let component: ArrayTranslatorComponent;
  let fixture: ComponentFixture<ArrayTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
