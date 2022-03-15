import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';


const routes: Routes = [
  { path: 'cursos', component: LayoutComponent, children: [
    { path: 'form', component: CursoFormComponent },
    { path: 'lista', component: CursoListaComponent},
    { path: '', redirectTo: '/cursos/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
