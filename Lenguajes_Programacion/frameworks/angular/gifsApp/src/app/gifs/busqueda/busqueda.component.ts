import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>

  constructor(private GifsService:GifsService){}

  buscar(){
    let valor = this.txtbuscar.nativeElement.value;  
    if (valor.trim().length === 0) {
      return;
    }
    this.GifsService.buscarGifs(valor);
    this.txtbuscar.nativeElement.value ='';
  }

}
