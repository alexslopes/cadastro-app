import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoService } from 'src/app/aluno.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: Aluno;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor( private service: AlunoService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) {
    this.aluno = new Aluno();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service.getAlunoById(this.id)
        .subscribe(
          response => this.aluno = response,
          errorresponse => this.aluno = new Aluno())
      }

    })

    console.log(this.aluno.nome)
  }

  voltarParaListagem() {
    this.router.navigate(['/aluno/lista'])
  }

  clicar() {
    console.log(this.aluno);
  }

  onSubmit() {
    if(this.id) {
      this.service.atualizar(this.aluno)
      .subscribe( response =>
        {this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = [ 'Erro ao atualizar o cliente.']
      })
    } else {

    this.service.salvar(this.aluno).subscribe(
      (response) => { this.success = true;
        this.errors = null;
        this.aluno = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }
}

}
