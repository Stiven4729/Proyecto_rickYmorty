import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    MatListModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class MaterialModule { }
