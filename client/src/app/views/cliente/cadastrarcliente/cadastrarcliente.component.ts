import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrarcliente',
  templateUrl: './cadastrarcliente.component.html',
  styleUrls: ['./cadastrarcliente.component.css']
})
export class CadastrarclienteComponent implements OnInit {
  _id = '';
  nome = '';
  cpf = '';
  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get("id");
    console.log(this._id);
  }
  cliente: Cliente;
  constructor(private router: Router, private service: ClienteService, private route: ActivatedRoute) { }

  Create(): void {
    console.log(this._id);

    if (this._id == null) {
      this.cliente = {
        Nome: this.nome,
        Cpf: this.cpf
      }

      console.log(this.cliente + " cadastrar");
      this.service.create(this.cliente).subscribe((cliente) => {
        if (cliente != null) {
          window.location.href = "http://localhost:4200/app/cliente";
        }
      });
    } else {
      this.cliente = {
        _id: this._id,
        Nome: this.nome,
        Cpf: this.cpf
      }

      console.log(this.cliente);
      this.service.update(this.cliente).subscribe((livro) => {
        if (livro != null) {
          window.location.href = "http://localhost:4200/app/cliente";
        }

      });
    }
  }
}
