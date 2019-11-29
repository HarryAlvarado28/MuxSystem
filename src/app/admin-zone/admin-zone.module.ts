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



@NgModule({
  declarations: [AdminZoneComponent, HomeComponent, UsersComponent, RolesComponent, AreasComponent, ColeccionesComponent, ArticulosComponent],
  imports: [
    CommonModule,
    AdminZoneRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminZoneModule { }
