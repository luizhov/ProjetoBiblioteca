import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LivroComponent } from './views/livro/livro.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { HomeComponent } from './views/home/home.component';


import { CadastrarLivroComponent } from './views/livro/cadastrar/cadastrar.component';
import { CadastrarclienteComponent } from './views/cliente/cadastrarcliente/cadastrarcliente.component';
import { ListarComponent } from './views/emprestimo/listar/listar.component';
import { EmprestarComponent } from './views/emprestimo/emprestar/emprestar.component';





@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    ClienteComponent,
    HomeComponent,
    
    CadastrarLivroComponent,
    
    CadastrarclienteComponent,
    
    ListarComponent,
    
    EmprestarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
