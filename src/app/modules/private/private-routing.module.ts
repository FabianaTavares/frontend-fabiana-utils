import { LinksBacanasModule } from './modules/links-bacanas/links-bacanas.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ProjetoUtilsAdminComponent } from './components/projeto-utils-admin/projeto-utils-admin.component';
import { PrivateGuardService } from './guards/private-guard.service';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		//canActivate: [PrivateGuardService],
		data: {
			titulo: 'Admin'
		}
		/* children: [
      {
        path: 'perfil',
        data: {
          preload: true,
        },
        //loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),
        canActivate: [PrivateGuardService]
      }
    ] */
	},
	{
		path: 'projeto-utils-admin',
		component: ProjetoUtilsAdminComponent,
		children: [
			{
				path: '',
				data: {
					preload: true,
					breadcrumb: [
						{
							titulo: 'CAdastro TESTE Breadcrumb'
						}
					]
				},
				loadChildren: () => import('./modules/cadastros/cadastros.module').then(m => m.CadastrosModule)
				//canActivate: [PrivateGuardService]
			},
			{
				path: '',
				data: {
					preload: true,
					breadcrumb: [
						{
							titulo: 'Blog'
						}
					]
				},
				loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
				//canActivate: [PrivateGuardService]
			},
			{
				path: '',
				data: {
					preload: true,
					breadcrumb: [
						{
							titulo: 'Componentes'
						}
					]
				},
				loadChildren: () => import('./modules/componentes/componentes.module').then(m => m.ComponentesModule)
				//canActivate: [PrivateGuardService]
			},
			{
				path: '',
				data: {
					preload: true,
					breadcrumb: [
						{
							titulo: 'Comportamentos'
						}
					]
				},
				loadChildren: () => import('./modules/comportamentos/comportamentos.module').then(m => m.ComportamentosModule)
				//canActivate: [PrivateGuardService]
			},
			{
				path: '',
				data: {
					preload: true,
					breadcrumb: [
						{
							titulo: 'Links Bacanas'
						}
					]
				},
				loadChildren: () => import('./modules/links-bacanas/links-bacanas.module').then(m => m.LinksBacanasModule)
				//canActivate: [PrivateGuardService]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrivateRoutingModule {}
