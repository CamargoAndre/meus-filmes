import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';


const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {


  constructor(private http: HttpClient) { }

  salvar(filme: Filme): Observable<Filme>{
    return this.http.post<Filme>(url, filme);

  }

  listar():Observable<Filme[]>{
    let httpParams = new HttpParams();
    return this.http.get<Filme[]>(url, {params: httpParams });
  }


}
