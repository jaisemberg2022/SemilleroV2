import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(  private _snackBar: MatSnackBar  ) { }

  ngOnInit(): void {
  }

  message:string="";

  openSnackBar( $event:any ){
    let classList :String = `${$event.path[1].attributes[3].ownerElement.classList[1]}-${$event.path[1].attributes[2].value}` ;
    // console.log(classList)
    // console.log($event.path[1].attributes[2].value)
    // console.log($event.path[1].attributes[3].ownerElement.classList[1] )
    this._snackBar.open(`${classList} message`,'',{
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass:`${classList}`,

    })
  }
}
