import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';


const routes: Routes = [
  { path: 'aluno', component: LayoutComponent, children: [
    {path: 'form', component: AlunoFormComponent},
    {path: 'form/:id', component: AlunoFormComponent},
    {path: 'lista', component: AlunoListaComponent},
    {path: '', redirectTo: '/aluno/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
