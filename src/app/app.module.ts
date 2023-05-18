import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { PublicModule } from "./modules/public/public.module";
import { PrivateModule } from "./modules/private/private.module";
import { ComponentsModule } from "./shared/components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { DirectivesModule } from "./shared/directives/directives.module";
import { ValidaFormModule } from "./shared/modules/valida-form/valida-form.module";
import { CoreModule } from "./core/core.module";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { NgxPaginationModule } from "ngx-pagination";
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
    ValidaFormModule.forRoot(),
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
