import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SintomasComponent } from './shared/sintomas/sintomas.component';
import { MainComponent } from './shared/main/main.component';
import { TransmissaoComponent } from './shared/transmissao/transmissao.component';
import { DadosComponent } from './shared/dados/dados.component';
import { FicaCasaComponent } from './shared/fica-casa/fica-casa.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sintomas', component: SintomasComponent },
  { path: 'transmissao', component: TransmissaoComponent },
  { path: 'dados', component: DadosComponent },
  { path: 'fica-em-casa', component: FicaCasaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
