import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalHeaderComponent } from './base-modal-header.component';



@NgModule({
  declarations: [BaseModalHeaderComponent],
  exports: [BaseModalHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModalHeaderModule { }
