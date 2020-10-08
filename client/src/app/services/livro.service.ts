import { Livro } from "./../models/Livro";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LivroService {

  baseURL = 'http://localhost:1234/livro/listar';
  
  constructor(private http: HttpClient) {}

  list(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseURL);
  }

  listbytitulo( titulo:string): Observable<Livro[]>{
      return this.http.get<Livro[]>('http://localhost:1234/livro/listar/'+titulo);
  }
  create(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>('http://localhost:1234/livro/cadastrar', livro);
  }
  update(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>('http://localhost:1234/livro/alterar', livro);
  }
  delete( titulo:string):Observable<Livro>{
    return this.http.get<Livro>('http://localhost:1234/livro/deletar/'+titulo);
}
}