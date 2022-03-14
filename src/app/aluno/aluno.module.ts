import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlunoListaComponent, AlunoFormComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule
  ],
  exports: [
    AlunoFormComponent,
    AlunoListaComponent
  ]
})
export class AlunoModule { }
