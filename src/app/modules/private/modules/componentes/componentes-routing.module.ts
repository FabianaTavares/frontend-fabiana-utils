import { ComponentesComponent } from './componentes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'componentes',
    component: ComponentesComponent,
    data: {
      breadcrumb: [
        {
          titulo: 'Componentes',
          link: 'componentes'
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
