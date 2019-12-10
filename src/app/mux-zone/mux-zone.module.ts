import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuxZoneRoutingModule } from './mux-zone.routing';


// --- Angular Material Modules -------
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MHomeComponent } from './m-home/m-home.component';



@NgModule({
  declarations: [MHomeComponent],
  imports: [
    CommonModule,
    MuxZoneRoutingModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule, FormsModule, ReactiveFormsModule, MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MuxZoneModule { }
