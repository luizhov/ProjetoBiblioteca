import { Cliente } from "./../models/Cliente";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClienteService {

  baseURL = 'http://localhost:1234/cliente/listar';
  
  constructor(private http: HttpClient) {}

  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseURL);
  }

  listbytitulo( titulo:string): Observable<Cliente[]>{
      return this.http.get<Cliente[]>('http://localhost:1234/cliente/listar/'+titulo);
  }
  create(Cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:1234/cliente/cadastrar', Cliente);
  }
  update(Cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:1234/cliente/alterar', Cliente);
  }
  delete( titulo:string):Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:1234/cliente/deletar/'+titulo);
}
}