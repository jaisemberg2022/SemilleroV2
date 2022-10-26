//importar 
import {  Component } from "@angular/core";
//especificar nombre el propio del tag html asi como el nombre y ruta del archivo
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

//crear y configurar clase propia para agregar propiedades como funciones
export class heroeComponent{
    nombre:string = "Ironman";
    edad:number = 35; 
    obtenerNombre():string{
        return`${this.nombre} - ${this.edad}`
    }
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase()
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}