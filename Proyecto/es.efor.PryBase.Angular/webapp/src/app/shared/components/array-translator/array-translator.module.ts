import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTranslatorComponent } from './array-translator.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ArrayTranslatorComponent],
  exports: [ArrayTranslatorComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ]
})
export class ArrayTranslatorModule { }
