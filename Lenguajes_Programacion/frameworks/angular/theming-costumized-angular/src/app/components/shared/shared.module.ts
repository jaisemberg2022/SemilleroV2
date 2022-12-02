import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';
import { SizeDirective } from './directives/size.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SizeDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,

    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSnackBarModule,
    SizeDirective,
    MatCardModule,
    MatTableModule
  ]
})
export class SharedModule { }
