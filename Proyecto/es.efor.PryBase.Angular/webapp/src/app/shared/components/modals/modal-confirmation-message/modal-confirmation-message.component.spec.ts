import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmationMessageComponent } from './modal-confirmation-message.component';

describe('ModalConfirmationMessageComponent', () => {
  let component: ModalConfirmationMessageComponent;
  let fixture: ComponentFixture<ModalConfirmationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
