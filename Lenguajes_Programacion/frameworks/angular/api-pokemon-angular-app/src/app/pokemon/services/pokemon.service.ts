import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchAllPokemonsResponse, Pokemon } from '../interfaces/pokemon.interface';

import { map } from "rxjs/operators";
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string =  'https://pokeapi.co/api/v2';

  constructor(private htpp:HttpClient) { }

  getAllPokemons():Observable<Pokemon[]>{
   return this.htpp.get<FetchAllPokemonsResponse>(`${this.url}/pokemon?limit=1500`)
   .pipe(  
      map(this.transformSmallPokemonIntoPokemon)
    )  
  }

  private transformSmallPokemonIntoPokemon(resp:FetchAllPokemonsResponse){
  
    const pokemoList:Pokemon[] = resp.results.map(poke => {
      
      const urlArray = poke.url.split('/');
      const id = urlArray[6];
      const pic =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return{
        id,
        pic,
        name:poke.name
      }
    })
    return pokemoList;
  } 

}
