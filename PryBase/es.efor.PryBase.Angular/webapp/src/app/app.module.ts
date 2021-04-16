import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ApiModule } from './shared/api/api.module';
import { ApiErrorInterceptor } from './shared/interceptors/api-error/api-error.interceptor';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons';

// CKEditor language load.
// MUST BE INCLUDED ON COMPILATION TIME
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import '@ckeditor/ckeditor5-build-classic/build/translations/eu';
import { ApiHeaderLangInterceptor } from './shared/interceptors/api-headers/api-header-lang/api-header-lang.interceptor';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { EpFullscreenImgModule } from './shared/_third-party/ep-components/components/ep-fullscreen-img/ep-fullscreen-img.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import {
  APP_MODULE_TOASTR_ROOT_CONFIG,
  APP_MODULE_TRANSLATE_ROOT_CONFIG,
  TRANSL_MISSING_HANDLER_CONFIG,
  MissingTranslationHandlerConfig,
  BsMenuModule,
  BsMenuConfig
} from 'ax-toolbox';
import { ApiHeaderKubInterceptor } from './shared/interceptors/api-headers/api-header-kub/api-header-kub.interceptor';
import { ApiHeaderJwtInterceptor } from './shared/interceptors/api-header-jwt/api-header-jwt.interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),

    ApiModule.forRoot({ rootUrl: '' }),
    CarouselModule,
    EpFullscreenImgModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(APP_MODULE_TRANSLATE_ROOT_CONFIG),
    ToastrModule.forRoot(APP_MODULE_TOASTR_ROOT_CONFIG),
    FontAwesomeModule,

    BsMenuModule.forRoot(new BsMenuConfig().setData({
      appLogoSrc: 'assets/img/logo/PryBase.png',
      isAppNameLabelShown: true,
    })),
  ],
  providers: [
    { provide: TRANSL_MISSING_HANDLER_CONFIG, useValue: {} },
    //#region INTERCEPTORS
    //#region INTERCEPTORS - JWT HEADER
    { provide: HTTP_INTERCEPTORS, useClass: ApiHeaderJwtInterceptor, multi: true },
    //#endregion
    //#region INTERCEPTORS - ERROR
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
    //#endregion
    //#region INTERCEPTORS - HEADERS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHeaderLangInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHeaderKubInterceptor,
      multi: true,
    },
    //#endregion
    //#endregion
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public library: FaIconLibrary) {
    //#region FONTAWESOME ICONS
    library.addIconPacks(fas);
    library.addIconPacks(fab);
    library.addIcons(faEnvelope, faClock);
    //#endregion
  }
}
