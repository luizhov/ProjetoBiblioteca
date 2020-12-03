import { Emprestimo } from "./../models/Emprestimo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class emprestimoservice {

  baseURL = 'http://localhost:1234/cliente/listar';

  constructor(private http: HttpClient) { }


  devolver(titulo: string): Observable<Emprestimo> {
    return this.http.get<Emprestimo>('http://localhost:1234/livro/devolver/' + titulo);
  }
  emprestar(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.post<Emprestimo>('http://localhost:1234/livro/emprestar', emprestimo);


  }
  procurar(emprestimo: string): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>('http://localhost:1234/livro/listaremprestimo');

  }
}