import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FotgotComponent } from './pages/fotgot/fotgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  {
    path:'',
    children:[
      { path:'forgot',component: FotgotComponent },
      { path:'login',component: LoginComponent },
      { path:'registro',component: RegistroComponent },
      {path:'**',redirectTo:'login'}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AuthRoutingModule { }
