import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/Emprestimo';
import { Livro } from 'src/app/models/Livro';
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
livro:Livro;
livros:Livro[]=[];
emprestimo: Emprestimo;
teste:string[]=[];
  constructor(private router:Router,private service:emprestimoservice,private route:ActivatedRoute) { }

  ngOnInit(): void {

    
    this._id = this.route.snapshot.paramMap.get("id");
    this.teste =this._id.split(".");
    

    
    
    
    if(this._id==''){
      window.location.href="http://localhost:4200/app/livro";
    }else{
      //this.emprestar();
    }

  }
  emprestar():void
{
  for(let livrourl of this.teste){
    console.log(livrourl);
this.emprestimo={
"DataEmprestimo": this.datae,
"DataDevolucao": this.datad ,
"livro" : livrourl,
"cliente" : this.cpf,
"status" : "pendente"
}

this.service.emprestar(this.emprestimo).subscribe((lista)=>{
  console.log(lista);
  console.log("asd");
  
  
  
  
  
  
})

  }
  window.location.href="http://localhost:4200/app/listaemprestimo";
}
}
