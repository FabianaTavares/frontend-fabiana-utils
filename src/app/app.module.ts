import { DirectivesModule } from './shared/directives/directives.module';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PrivateModule } from './modules/private/private.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './modules/public/public.module';
import { ValidaFormModule } from './shared/modules/valida-form/valida-form.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PublicModule,
    PrivateModule,
    ComponentsModule,
    HttpClientModule,
    DirectivesModule,
    BrowserAnimationsModule, // required animations module
    ValidaFormModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CoreModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
    PaginationModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
