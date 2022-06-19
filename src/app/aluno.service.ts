import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from './aluno/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  apiURL: string = environment.apiURLBase + '/api/aluno';

  constructor(private http: HttpClient) { }

  salvar(aluno: Aluno) : Observable<Aluno> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer' + ' ' +  token.access_token
    }
    return this.http.post<Aluno>(`${this.apiURL}`,aluno, { headers });
  }

  atualizar(aluno: Aluno) : Observable<any> {
    return this.http.put<Aluno>(`${this.apiURL}/${aluno.id}`,aluno);
  }

  getAlunos() : Observable<Aluno[]> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer' + ' ' +  token.access_token
    }
    return this.http.get<Aluno[]>(this.apiURL, { headers });
  }

  getAlunoById(id: number) : Observable<Aluno> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deleter(aluno: Aluno) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${aluno.id}`);
  }
}
