import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

 personajes: Personajes[] =[];
  
 nuevo:Personajes ={
    nombre:'maestro roshi',
    poder:5000
  }

  get Personajes():Personajes[]{
    return this.dbzService.Personajes;
  }

  cambiarNombre(event:any){
    console.log(event.target.value)
  }



  // agregarNuevoPersonajes(argumento:Personajes){
  //   this.personajes.push(argumento)
  //   console.log(argumento)
  // }

  constructor(private  dbzService: dbzService){
    
  }

}
