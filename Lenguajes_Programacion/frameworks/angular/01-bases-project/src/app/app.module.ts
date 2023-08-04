import { NgModule } from '@angular/core';
//importacion de componentes
import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contadores.module';
//importacion modulos
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SizeDirective } from './size.directive';
import { BrowserModule } from '@angular/platform-browser';

//declaracion de componentes

@NgModule({
  declarations: [
    AppComponent,
    SizeDirective,
  ],
  imports: [
    HeroesModule,
    ContadorModule,
    DbzModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
