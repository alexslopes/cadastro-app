import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CursoListaComponent, CursoFormComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    CursoListaComponent,
    CursoFormComponent
  ]
})
export class CursoModule { }
