import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/Emprestimo';
import { Livro } from 'src/app/models/Livro';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { emprestimoservice } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-emprestar',
  templateUrl: './emprestar.component.html',
  styleUrls: ['./emprestar.component.css']
})
export class EmprestarComponent implements OnInit {
  _id = '';
  cpf = '';
  datae = new Date();
  datad = new Date();
  livro: Livro;
  livros: Livro[] = [];
  clientes: Cliente[];
  emprestimo: Emprestimo;
  teste: string[] = [];
  constructor(private router: Router, private clienteservice: ClienteService, private service: emprestimoservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteservice.list().subscribe((CLiente) => {
      console.log(CLiente);
      this.clientes = CLiente;
    });
    this.clienteservice.list().subscribe((lista) => {
      console.log(lista);
      this.clientes = lista;
    });
    this._id = this.route.snapshot.paramMap.get("id");
    this.teste = this._id.split(".");

    if (this._id == '') {
      window.location.href = "http://localhost:4200/app/livro";
    } else {
      //this.emprestar();
    }
  }
  emprestar(): void {

      for (let livrourl of this.teste) {
        console.log(livrourl);
        this.emprestimo = {
          "DataEmprestimo": this.datae,
          "DataDevolucao": this.datad,
          "livro": livrourl,
          "cliente": this.cpf,
          "status": "pendente"
        }

        this.service.emprestar(this.emprestimo).subscribe((lista) => {
          console.log(lista);
          console.log("asd");
        })
      }
    window.location.href = "http://localhost:4200/app/listaemprestimo";
  }

  botaoClicado() {
    alert('Por favor insira um CPF válido');
  }
}
