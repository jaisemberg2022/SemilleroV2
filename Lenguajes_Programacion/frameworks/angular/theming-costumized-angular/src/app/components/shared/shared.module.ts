import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { Matt as MatTableModule} from '@angular/material/legacy-table';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import { MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import { MatDividerModule} from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule} from '@angular/material/legacy-input';
import { MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import { MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import { MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { SizeDirective } from './directives/size.directive';
import {MatInputModule} from '@angular/material/input';



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
