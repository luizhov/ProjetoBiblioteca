import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarclienteComponent } from './views/cliente/cadastrarcliente/cadastrarcliente.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { EmprestarComponent } from './views/emprestimo/emprestar/emprestar.component';
import { ListarComponent } from './views/emprestimo/listar/listar.component';
import { HomeComponent } from './views/home/home.component';
import { CadastrarLivroComponent } from './views/livro/cadastrar/cadastrar.component';
import { LivroComponent } from './views/livro/livro.component';
const routes: Routes = [{
  path:'app/livro',
  component: LivroComponent
  
},
{
  path:"",
  component: HomeComponent
},
{
path:'app/cadastrarlivro',
component : CadastrarLivroComponent
},
{
path:'app/cadastrarlivro/:id',
component : CadastrarLivroComponent
},
{
  path:'app/deletarlivro/:id',
  component : LivroComponent
  },
  {
    path:'app/cliente',
    component : ClienteComponent
    },
    {
      path:'app/deletarcliente/:id',
      component : ClienteComponent
      },
      {
        path:'app/cadastrarcliente/:id',
        component : CadastrarclienteComponent
        },
        {
          path:'app/cadastrarcliente',
          component : CadastrarclienteComponent
          },
{
path:'app/fazeremprestimo/:id',
component : EmprestarComponent
},
{
  path:'app/listaemprestimo',
  component : ListarComponent
  },
  {
    path:'app/devolver/:id',
    component : ListarComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
