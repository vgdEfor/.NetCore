import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpDatatableComponent } from './ep-datatable.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DtBodyDataPipe } from './internal-pipes/dt-body-data/dt-body-data.pipe';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormatFromObjectModule } from '../../pipes/format-from-object/format-from-object.module';
import { RouterModule } from '@angular/router';
import { AutoBlurModule } from '../../directives/auto-blur/auto-blur.module';



@NgModule({
  declarations: [EpDatatableComponent, DtBodyDataPipe],
  exports: [EpDatatableComponent, DtBodyDataPipe],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    PaginationModule,
    RouterModule,

    BsDatepickerModule,
    TooltipModule,

    FormatFromObjectModule,

    AutoBlurModule,
  ],
  providers: [DtBodyDataPipe]
})
export class EpDatatableModule { }
