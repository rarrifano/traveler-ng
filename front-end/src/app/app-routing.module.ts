import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotaListComponent } from './nota/nota-list/nota-list.component';

const routes: Routes = [
  {path:'nota', component: NotaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
