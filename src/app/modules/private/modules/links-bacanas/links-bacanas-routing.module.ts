import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksBacanasComponent } from './links-bacanas.component';

const routes: Routes = [
	{
		path: 'links-bacanas',
		component: LinksBacanasComponent,
		data: {
			breadcrumb: [
				{
					titulo: 'links bacanas',
					link: 'links-bacanas'
				}
			]
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LinksBacanasRoutingModule {}
