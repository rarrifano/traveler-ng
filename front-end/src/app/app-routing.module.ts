import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { NotaListComponent } from './nota/nota-list/nota-list.component';
import { NotaFormComponent } from './nota/nota-form/nota-form.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';

const routes: Routes = [
  { path:'nota', component: NotaListComponent },
  { path:'nota/novo', component: NotaFormComponent  },
  { path:'nota/:id', component: NotaFormComponent },
  { path: 'usuario', component: UsuarioListComponent },
  { path:'usuario/novo', component: UsuarioFormComponent  },
  { path:'usuario/:id', component: UsuarioFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
