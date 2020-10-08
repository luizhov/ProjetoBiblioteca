import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  _id:string;
  clientes:Cliente[];
  @ViewChild('value') input;

  constructor(private router:Router,private clienteservice:ClienteService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("id"));
    
    this._id = this.route.snapshot.paramMap.get("id");
    if(this._id!=null){
      this.delete();
    }
    
    

    this.clienteservice.list().subscribe((lista)=>{
      console.log(lista);
      
      
      this.clientes = lista;
      
      
      
    })
  }
  delete():void{
    console.log(this._id);
    this.clienteservice.delete(this._id).subscribe((retorno)=>{
      window.location.href="http://localhost:4200/app/cliente";   
    })
  }

  ListByTitulo(): void{
    
    this.clienteservice.listbytitulo(this.input.nativeElement.value).subscribe((retorno)=>{
      console.log(retorno);
      
      
    })
      }

}
