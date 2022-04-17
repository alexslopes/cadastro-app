import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/curso.service';
import { CursoBusca } from './cursoBusca';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: CursoBusca[];
  message: string;
  constructor(
    private service: CursoService
  ) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
   }

  ngOnInit(): void {
    this.listar("");
  }

  consultar() {
    this.listar(this.nome);
  }

  private listar(nome: string) {
    this.service.buscar(nome)
      .subscribe(response => {
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
          } else {
            this.message = null;
          }
        });
  }


}
