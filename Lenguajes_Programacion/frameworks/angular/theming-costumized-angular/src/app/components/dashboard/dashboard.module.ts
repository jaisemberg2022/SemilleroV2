import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColorsComponent } from './colors-cuztomized/colors.component';
import { InicioComponent } from './inicio/inicio.component';
import { MessagesComponent } from './messages-conponent/messages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    ColorsComponent,
    InicioComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
