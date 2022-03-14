import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/aluno.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {

  alunos: Aluno[] = [];
  alunoSelecionado: Aluno;
  mensagemSucess: string;
  mensagemErro: string;

  constructor(
    private service: AlunoService,
    private router: Router) {}

  ngOnInit(): void {
    this.service.getAlunos()
    .subscribe(resposta => this.alunos = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/aluno/form'])
  }

  preparaDelecao(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  deletarAlunos() {
    this.service.deleter(this.alunoSelecionado).
    subscribe(
      response => {this.mensagemSucess = 'Aluno deletado com sucesso!'
      this.ngOnInit()
      },
      error => this.mensagemErro = 'Ocorreu um erro ao deletar o aluno')
  }

}
