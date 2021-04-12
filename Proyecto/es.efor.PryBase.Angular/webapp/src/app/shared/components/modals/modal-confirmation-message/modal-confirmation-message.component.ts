import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BaseModal } from '../../_base-components/base-modal/base-modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirmation-message',
  templateUrl: './modal-confirmation-message.component.html',
  styleUrls: ['./modal-confirmation-message.component.scss']
})
export class ModalConfirmationMessageComponent
  extends BaseModal
  implements OnInit
{
  @ViewChild('tmplModal') tmplModal: TemplateRef<any>;

  @Input() labelHeader = '';
  @Input() btnLabelConfirm = 'Confirm';
  @Input() btnLabelClose = 'Close';
  @Input() cssClassHeader = 'bg-primary text-white';
  @Input() modalSize: 'modal-lg' | 'modal-xl' = 'modal-lg';

  @Input() btnConfirmShown = true;
  @Input() btnCloseShown = true;

  @Input() isDisabledClose = false;
  @Input() isDisabledConfirm = false;
  @Input() isLoadingClose = false;
  @Input() isLoadingConfirm = false;

  @Output() onClickConfirm = new EventEmitter<null>();
  constructor(
    modalSV: BsModalService
  ) {
    super(modalSV);
  }

  ngOnInit(): void {
  }

  open() {
    return super.open(this.tmplModal, { class: this.modalSize });
  }
}
