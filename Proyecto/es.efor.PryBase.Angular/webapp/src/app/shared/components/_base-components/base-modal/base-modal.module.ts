import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BaseModalHeaderModule } from './base-modal-header/base-modal-header.module';
import { BaseModalBodyModule } from './base-modal-body/base-modal-body.module';
import { BaseModalFooterModule } from './base-modal-footer/base-modal-footer.module';

/**
 * Incluye las partes de un modal basado en la plantilla del proyecto para una fácilc construcción de un modal.
 * Ver ejemplo en `ZityentityMergeModule` y `ZityentityMergeComponent`
 */
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        BaseModalHeaderModule,
        BaseModalBodyModule,
        BaseModalFooterModule,
    ],
})
export class BaseModalModule { }
