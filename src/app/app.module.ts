import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SintomasComponent } from './shared/sintomas/sintomas.component';
import { TransmissaoComponent } from './shared/transmissao/transmissao.component';
import { DadosComponent } from './shared/dados/dados.component';
import { FicaCasaComponent } from './shared/fica-casa/fica-casa.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    SintomasComponent,
    TransmissaoComponent,
    DadosComponent,
    FicaCasaComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
