import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComportamentosComponent } from './comportamentos.component';

const routes: Routes = [
	{
		path: 'comportamentos',
		component: ComportamentosComponent,
		data: {
			breadcrumb: [
				{
					titulo: 'Comportamentos',
					link: 'comportamentos'
				}
			]
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComportamentosRoutingModule {}
