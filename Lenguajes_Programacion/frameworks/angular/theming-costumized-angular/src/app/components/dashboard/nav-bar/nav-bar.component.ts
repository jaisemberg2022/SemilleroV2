import { Component, OnInit } from '@angular/core';
import { MatLegacySlideToggleChange as MatSlideToggleChange } from '@angular/material/legacy-slide-toggle';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menu:Menu[] = [];

  constructor(private _menuService:MenuService) { }

  ngOnInit(): void {
    this.cargarMenu()
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe(data => {
      // console.log(data)
      this.menu = data
    })
  }
  
  isChecked:boolean = false;

  changed(event:MatSlideToggleChange):void{
    document.body.classList.toggle('dark-theme-one')
  }

}
