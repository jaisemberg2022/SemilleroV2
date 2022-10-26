import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importacion de componentes
import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contadores.module';
//importacion modulos
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

//declaracion de componentes

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
