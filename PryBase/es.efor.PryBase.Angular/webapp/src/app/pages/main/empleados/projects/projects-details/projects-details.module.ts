import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsDetailsComponent } from './projects-details.component';
import { TranslateModule } from '@ngx-translate/core';

import { ArrayTranslatorModule } from 'src/app/shared/components/array-translator/array-translator.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DecimalToStringModule } from 'src/app/shared/pipes/decimal-to-string/decimal-to-string.module';
import { ModalConfirmationMessageModule } from 'src/app/shared/components/modals/modal-confirmation-message/modal-confirmation-message.module';
import { BsFormSelectModule } from 'ax-toolbox';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsFormAutocompleteModule} from  'ax-toolbox';

const routes: Routes = [
  {
    path: '', component: ProjectsDetailsComponent,
  },
  { path: ':id', component: ProjectsDetailsComponent, }
];

@NgModule({
  declarations: [ProjectsDetailsComponent],
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
    ModalConfirmationMessageModule,
    BsFormAutocompleteModule,
    BsFormSelectModule,
    CollapseModule
  ],
  providers: [DatePipe]
})
export class ProjectsDetailsModule { }
