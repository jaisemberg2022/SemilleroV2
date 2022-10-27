import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    PokemonListComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonListComponent
  ],
})
export class PokemonModule { }
