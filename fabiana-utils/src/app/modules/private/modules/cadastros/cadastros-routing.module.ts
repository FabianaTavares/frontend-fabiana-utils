import { CadastrarPerfilComponent } from './components/cadastrar-perfil/cadastrar-perfil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'cadastrar-perfil',
    component: CadastrarPerfilComponent,
    data: {
      breadcrumb: [
        {
          titulo: 'cadastro-perfil',
          link: 'Teste'
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
