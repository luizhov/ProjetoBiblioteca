import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/Emprestimo';
import { Livro } from 'src/app/models/Livro';
import { emprestimoservice } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  _id = '';
  @ViewChild('value') input;
  emprestimos: Emprestimo[];


  constructor(private router: Router, private service: emprestimoservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get("id");

    if (this._id != null) {
      this.devolver();
    }
    this.service.procurar("a").subscribe((lista) => {
      console.log(lista);

      this.emprestimos = lista;




    })
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
