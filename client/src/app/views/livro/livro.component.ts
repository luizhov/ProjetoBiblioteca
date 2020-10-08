import { Livro } from 'src/app/models/Livro';
import {LivroService} from 'src/app/services/livro.service';
import { Component, ElementRef, OnInit, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  _id:string;
  livros:Livro[]= [];
  livro :Livro;
  @ViewChild('value') input;
  

  constructor(private router:Router,private livroservice:LivroService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("id"));
    
    this._id = this.route.snapshot.paramMap.get("id");
    if(this._id!=null){
      this.delete();
    }
    
    

    this.livroservice.list().subscribe((lista)=>{
      console.log(lista);
      
      
      this.livros = lista;
      
      
      
    })
    
  
  }
  ListByTitulo(): void{
    
this.livroservice.listbytitulo(this.input.nativeElement.value).subscribe((retorno)=>{
  console.log(retorno);
  
  
})
  }

  delete(): void{
    
    console.log(this._id);
    this.livroservice.delete(this._id).subscribe((retorno)=>{
      window.location.href="http://localhost:4200/app/livro";   
    })


  }

 


}