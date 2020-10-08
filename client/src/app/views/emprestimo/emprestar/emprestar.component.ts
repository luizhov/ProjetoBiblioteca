import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/Emprestimo';
import {emprestimoservice} from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-emprestar',
  templateUrl: './emprestar.component.html',
  styleUrls: ['./emprestar.component.css']
})
export class EmprestarComponent implements OnInit {
_id='';
cpf='';
datae = new Date();
datad = new Date();

emprestimo: Emprestimo;
  constructor(private router:Router,private service:emprestimoservice,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.datad.setDate(this.datae.getDate()+7);
    
    console.log(this.route.snapshot.paramMap.get("id"));
    
    this._id = this.route.snapshot.paramMap.get("id");
    if(this._id==''){
      window.location.href="http://localhost:4200/app/livro";
    }else{
      this.emprestar();
    }

  }
  emprestar():void
{
this.emprestimo={
"DataEmprestimo": this.datae,
"DataDevolucao": this.datad ,
"livro" : this._id,
"cliente" : this.cpf,
"status" : "pendente"

}
this.service.emprestar(this.emprestimo).subscribe((lista)=>{
  console.log(lista);
  
  
  window.location.href="http://localhost:4200/app/listaemprestimo";
  
  
  
})
}
}
