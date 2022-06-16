import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public.routing';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
})
export class PublicModule {}
