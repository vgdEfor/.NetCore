import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalFooterComponent } from './base-modal-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [BaseModalFooterComponent],
  exports: [BaseModalFooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class BaseModalFooterModule { }
