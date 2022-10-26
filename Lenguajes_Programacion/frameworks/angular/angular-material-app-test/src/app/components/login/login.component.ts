import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  //variables
  form: FormGroup
  loading:boolean = false; 
  //metodos
  ingresar(){
    const usuario:string = this.form.value.usuario
    const password:string = this.form.value.password
    if (usuario == 'jperez' && password == 'admin123') {
      //redireccion al dashboard
      this.fakeLoading()
    }
    else{
      //mensaje de error
      this.error()
    }
  }
  error(){
    this._snackBar.open('usuario o contraseña ingresados son invalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }
  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      //redireccion total al dashboard
      this.router.navigate(['dashboard'])
    }, 1500);
  }
  //constructor
  constructor( private fb :FormBuilder,private _snackBar: MatSnackBar,private router:Router) {
    this.form = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
   }
}
