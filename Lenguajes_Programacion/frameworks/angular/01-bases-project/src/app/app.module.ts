import { NgModule } from '@angular/core';
//importacion de componentes
import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contadores.module';
//importacion modulos
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { SizeDirective } from './size.directive';

//declaracion de componentes

@NgModule({
  declarations: [
    AppComponent,
    SizeDirective,
  ],
  imports: [
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
