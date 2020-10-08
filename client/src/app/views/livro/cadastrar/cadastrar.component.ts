import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarLivroComponent implements OnInit {
  _id = '';
  titulo = '';
  autor = '';
  editora = '';
  genero = '';
  codigo='';
  ano;

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get("id");
    console.log(this._id);

  }
  livro: Livro;
  constructor(private service: LivroService, private route: ActivatedRoute) { }

  Create(): void {

    if (this._id == null) {
      this.livro = {

        Titulo: this.titulo,
        Autor: this.autor,
        Editora: this.editora,
        Status: "DISPONÍVEL",
        AnoLancamento: this.ano,
        Codigo: this.codigo,
        Genero: this.genero
      }


      console.log(this.livro);
      this.service.create(this.livro).subscribe((livro) => {

        if (livro != null) {
          window.location.href = "http://localhost:4200/app/livro";
        }
      });
    } else {
      this.livro = {
        _id: this._id,
        Titulo: this.titulo,
        Autor: this.autor,
        Editora: this.editora,
        Status: "DISPONÍVEL",
        AnoLancamento: this.ano,
        Codigo: this.codigo,
        Genero: this.genero
      }
      console.log(this.livro);
      this.service.update(this.livro).subscribe((livro) => {

        if (livro != null) {
          window.location.href = "http://localhost:4200/app/livro";
        }
      });

    }
  }

}

