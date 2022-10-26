import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuarios[] = [
    {usuario: 'jperez', nombre: 'juan', apellido: 'perez', sexo: 'Masculino'},
    {usuario: 'mpelaez', nombre: 'maria', apellido: 'pelaez', sexo: 'Femenino'},
    {usuario: 'Agsto', nombre: 'augusto', apellido: 'rodrigues', sexo: 'Masculino'},
    {usuario: 'dBenito', nombre: 'david', apellido: 'benito', sexo: 'Masculino'},
    {usuario: 'ftorres', nombre: 'fabian', apellido: 'torres', sexo: 'Masculino'},
    {usuario: 'jflores', nombre: 'jenny', apellido: 'flores', sexo: 'Femenino'},
    {usuario: 'lrodrigues', nombre: 'laura', apellido: 'rodrigues', sexo: 'Femenino'},
    {usuario: 'mpalermo', nombre: 'martin', apellido: 'palermo', sexo: 'Masculino'},
  ];
  
  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index:number){
    this.listUsuarios.splice(index,1)
  }
  agregarUsuario(usuario:Usuarios){
    this.listUsuarios.unshift(usuario)
  }
}
