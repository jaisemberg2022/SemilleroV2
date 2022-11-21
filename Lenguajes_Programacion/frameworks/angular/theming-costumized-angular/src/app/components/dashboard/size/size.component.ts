import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { tableExample } from "src/app/interfaces/tableExample";


const ELEMENT_DATA: tableExample[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  
];

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss'] 
})


export class SizeComponent implements OnInit,OnChanges {
  
  displayedColumns: string[] = [];
  dataSource : tableExample[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns =   ['position', 'name', 'weight', 'symbol'];
    this.dataSource = ELEMENT_DATA;
  
  }

  ngOnChanges(): void {

  }

}