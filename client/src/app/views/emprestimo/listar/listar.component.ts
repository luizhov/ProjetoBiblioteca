import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/Emprestimo';
import { Livro } from 'src/app/models/Livro';
import { emprestimoservice } from 'src/app/services/emprestimo.service';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  _id = '';
  @ViewChild('value') input;
  emprestimos: Emprestimo[] = [];
  map = new Map();

  constructor(private router: Router, private service: emprestimoservice, private clienteservice: ClienteService, private route: ActivatedRoute, private livroservice: LivroService) { }

  ngOnInit(): void {


    this._id = this.route.snapshot.paramMap.get("id");
    if (this._id != null) {
      this.devolver();
    }
    this.service.procurar("a").subscribe((lista) => {
      console.log(lista);
      this.pegarnome();
      this.pegarCliente();
      this.emprestimos = lista;
    })
  }

  pegarCliente():void{
    for(let b of this.emprestimos){
      console.log(this.clienteservice.listbytitulo(b.cliente))
    }
  }

  ListByTitulo(): void {

    this.clienteservice.listbytitulo(this.input.nativeElement.value).subscribe((retorno) => {
      console.log(retorno);
    })
  }

  pegarnome(): void {
    for (let a of this.emprestimos) {
      console.log(this.livroservice.listbyid(a.livro))
      //this.map.set(,a)  
    }
  }

  listar(): void {
    this.service.procurar("a").subscribe((lista) => {
      console.log(lista);
      this.emprestimos = lista;
    })

  }
  devolver(): void {
    console.log(this._id);
    this.service.devolver(this._id).subscribe((lista) => {
      console.log(lista);

      window.location.href = "http://localhost:4200/app/livro";

    })

  }

}
