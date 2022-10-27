import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0,search :string = ''): Pokemon[] {
    
    if (search.length === 0) {
      return pokemons.slice(page, page+5);
    }
    else{
      const filterPokemon = pokemons.filter(poke => poke.name.includes(search))
      return filterPokemon.slice(page, page+5);
    }
  }
}
