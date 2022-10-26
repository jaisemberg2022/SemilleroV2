import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input()  nuevo:Personajes = {
    nombre:'',
    poder:0
  }
  
  constructor(private dbzService:dbzService){

  }
  
  // @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();
  agregar(){
    if (this.nuevo.nombre.trim().length == 0 ) {return}

    // this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonajes(this.nuevo);
    this.nuevo =  {
      nombre:'',
      poder:0
    }

  }
}
