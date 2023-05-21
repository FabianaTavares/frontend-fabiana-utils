import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksBacanasRoutingModule } from './links-bacanas-routing.module';
import { LinksBacanasComponent } from './links-bacanas.component';

@NgModule({
	declarations: [LinksBacanasComponent],
	imports: [CommonModule, LinksBacanasRoutingModule]
})
export class LinksBacanasModule {}
