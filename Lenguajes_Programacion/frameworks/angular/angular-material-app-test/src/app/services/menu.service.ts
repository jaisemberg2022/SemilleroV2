import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private htpp:HttpClient) { }

  getMenu():Observable<Menu[]>{
    return this.htpp.get<Menu[]>('./assets/data/menu.json');
  }
}
