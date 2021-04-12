import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalBodyComponent } from './base-modal-body.component';



@NgModule({
  declarations: [BaseModalBodyComponent],
  exports: [BaseModalBodyComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModalBodyModule { }
