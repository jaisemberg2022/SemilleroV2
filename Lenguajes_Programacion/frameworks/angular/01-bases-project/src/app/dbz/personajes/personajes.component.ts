import { Component,Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {
  // @Input()personajes:Personajes []=[];


   get personajes(){
    return this.dbzService.Personajes
   }


  constructor( private dbzService: dbzService){

  }

}
