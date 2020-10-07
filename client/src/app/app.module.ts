import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroComponent } from './views/livro/livro.component';
import { ClienteComponent } from './views/cliente/cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
