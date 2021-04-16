import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { TranslateModule } from '@ngx-translate/core';
import { ArrayTranslatorModule } from 'src/app/shared/components/array-translator/array-translator.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DecimalToStringModule } from 'src/app/shared/pipes/decimal-to-string/decimal-to-string.module';

const routes: Routes = [
  { path: '', component: DetailsComponent, },
  { path: ':id', component: DetailsComponent, },
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    ArrayTranslatorModule,
    FontAwesomeModule,
    TooltipModule,
    BsDatepickerModule,

    DecimalToStringModule,
  ]
})
export class DetailsModule { }
