import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    /*   BrowserModule,
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
      NgxPaginationModule */
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
