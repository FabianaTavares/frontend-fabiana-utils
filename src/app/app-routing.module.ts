import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'aplicacao-utils',
		pathMatch: 'full'
	},
	{
		path: 'modules/public/',
		loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
	},
	{
		path: 'private',
		loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
