import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { NotaListComponent } from './nota/nota-list/nota-list.component';
import { NotaFormComponent } from './nota/nota-form/nota-form.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa/empresa-form/empresa-form.component';
import { TransportadoraListComponent } from './transportadora/transportadora-list/transportadora-list.component';
import { TransportadoraFormComponent } from './transportadora/transportadora-form/transportadora-form.component';

const routes: Routes = [
  { path: 'nota', component: NotaListComponent },
  { path: 'nota/novo', component: NotaFormComponent  },
  { path: 'nota/:id', component: NotaFormComponent },
  { path: 'usuario', component: UsuarioListComponent },
  { path: 'usuario/novo', component: UsuarioFormComponent  },
  { path: 'usuario/:id', component: UsuarioFormComponent },
  { path: 'empresa', component: EmpresaListComponent },
  { path: 'empresa/novo', component: EmpresaFormComponent  },
  { path: 'empresa/:id', component: EmpresaFormComponent },
  { path: 'transportadora', component: TransportadoraListComponent },
  { path: 'transportadora/novo', component: TransportadoraFormComponent  },
  { path: 'transportadora/:id', component: TransportadoraFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
