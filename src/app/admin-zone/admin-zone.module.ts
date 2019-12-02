import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdminZoneRoutingModule } from './admin-zone.routing';
import { AdminZoneComponent } from './admin-zone.component';
import { RolesComponent } from './roles/roles.component';
import { AreasComponent } from './areas/areas.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CreateComponent } from './roles/create/create.component';
import { RolsComponent } from './roles/rols/rols.component';


// --- Angular Material Modules -------
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminZoneComponent, HomeComponent, UsersComponent, RolesComponent, AreasComponent, ColeccionesComponent, ArticulosComponent, CreateComponent, RolsComponent],
  imports: [
    CommonModule,
    AdminZoneRoutingModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule, FormsModule, ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminZoneModule { }
