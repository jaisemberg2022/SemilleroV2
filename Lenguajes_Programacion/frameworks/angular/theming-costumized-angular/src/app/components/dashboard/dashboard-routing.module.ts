import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors-cuztomized/colors.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { MessagesComponent } from './messages-conponent/messages.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'colores',component:ColorsComponent},
    {path:'mensajes',component:MessagesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
