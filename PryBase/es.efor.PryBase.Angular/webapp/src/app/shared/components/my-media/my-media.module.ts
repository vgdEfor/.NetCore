import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMediaComponent } from './my-media.component';
import { TranslateModule } from '@ngx-translate/core';
import { FiledropModule } from '../../_third-party/ep-components/components/filedrop/filedrop.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutoBlurModule } from '../../_third-party/ep-components/directives/auto-blur/auto-blur.module';
import { ModalConfirmationMessageModule } from '../modals/modal-confirmation-message/modal-confirmation-message.module';



@NgModule({
  declarations: [MyMediaComponent],
  exports: [MyMediaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    FiledropModule,
    TabsModule,
    PaginationModule,
    FontAwesomeModule,
    
    AutoBlurModule,
    ModalConfirmationMessageModule,
  ]
})
export class MyMediaModule { }
