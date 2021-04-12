import { ViewChild, TemplateRef, Directive } from '@angular/core';
import { BaseModalHeaderComponent } from './base-modal-header/base-modal-header.component';
import { BaseModalBodyComponent } from './base-modal-body/base-modal-body.component';
import { BaseModalFooterComponent } from './base-modal-footer/base-modal-footer.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Directive()
export class BaseModal {
  @ViewChild(BaseModalHeaderComponent) modalHeader: BaseModalHeaderComponent;
  @ViewChild(BaseModalBodyComponent) ModalBody: BaseModalBodyComponent;
  @ViewChild(BaseModalFooterComponent) ModalFooter: BaseModalFooterComponent;

  modalRef: BsModalRef;
  constructor(
    public modalSV: BsModalService,
  ) { }

  close() {
    this.modalRef.hide();
  }
  open(modalContentTemplate: TemplateRef<unknown>, config?: Partial<ModalOptions>) {
    this.modalRef = this.modalSV.show(modalContentTemplate, config);
    return this.modalRef;
  }
}
