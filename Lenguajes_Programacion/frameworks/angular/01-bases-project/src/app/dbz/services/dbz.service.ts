import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.interface';

@Injectable()

export class dbzService{    
    private _personajes:Personajes[]=[
        {
        nombre:'goku',
        poder:20000
        },

        {
        nombre:'vegueta',
        poder:18000
        }
    ]
    get Personajes():Personajes[]{
        return [...this._personajes];
    }
    constructor(){

    }
    agregarPersonajes(personaje:Personajes){
        this._personajes.push(personaje)
    }
}