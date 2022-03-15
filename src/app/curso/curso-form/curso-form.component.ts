import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/aluno.service';
import { Aluno } from 'src/app/aluno/aluno';
import { CursoService } from 'src/app/curso.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  alunos: Aluno[] = [];
  curso: Curso;
  success: boolean = false;
  errors: String[];

  constructor(
    private alunoService: AlunoService,
    private service: CursoService
  ) {
    this.curso = new Curso();
   }

  ngOnInit(): void {
    this.alunoService
    .getAlunos()
    .subscribe( response => this.alunos = response);
  }

  onSubmit(){
    this.service
      .salvar(this.curso)
      .subscribe( reponse => {
        this.success = true;
        this.errors = null;
        this.curso = new Curso();
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
        ;
        ;

      })
  }

}
