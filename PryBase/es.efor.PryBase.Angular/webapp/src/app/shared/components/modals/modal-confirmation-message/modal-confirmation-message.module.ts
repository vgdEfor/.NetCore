import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationMessageComponent } from './modal-confirmation-message.component';
import { TranslateModule } from '@ngx-translate/core';
import { BaseModalModule } from '../../_base-components/base-modal/base-modal.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ModalConfirmationMessageComponent],
  exports: [ModalConfirmationMessageComponent],
  imports: [
    CommonModule,
    BaseModalModule,
    ModalModule.forChild(),
  ]
})
export class ModalConfirmationMessageModule { }
