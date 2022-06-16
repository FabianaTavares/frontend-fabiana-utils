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
      titulo: "Admin"
    },
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
        path: 'teste',
        data: {
          preload: true,
          breadcrumb: [
            {
              titulo: 'CAdastro TESTE Breadcrumb'
            }
          ]
        },
        loadChildren: () => import('./modules/cadastros/cadastros.module').then(m => m.CadastrosModule),
        //canActivate: [PrivateGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
