import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';

const appRoutes: Routes = [
  { path: 'lista', component: ListaUsuarioComponent},
  { path: 'cad-usuario' , component: DadosUsuarioComponent},
  { path: 'detalhe-usuario/:id' , component: DetalheUsuarioComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    DetalheUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ContatosDataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
