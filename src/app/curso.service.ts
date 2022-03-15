import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from './curso/curso';
import { CursoBusca } from './curso/curso-lista/cursoBusca';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiURL: string = environment.apiURLBase + "/api/cursos";

  constructor(private http: HttpClient) {

   }

   salvar(curso: Curso) : Observable<Curso> {
     return this.http.post<Curso>(this.apiURL, Curso);
   }

  buscar(nome: string, mes: number): Observable<CursoBusca[]> {
    const httpParams = new HttpParams()
      .set("nome", nome);

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);

  }

}
