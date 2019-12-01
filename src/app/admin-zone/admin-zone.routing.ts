import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RolesComponent } from './roles/roles.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AreasComponent } from './areas/areas.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routesAdminZone: Routes = [
    { path: '_', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'rols', component: RolesComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'collections', component: ColeccionesComponent },
    { path: 'articles', component: ArticulosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routesAdminZone)],
    exports: [RouterModule]
})

export class AdminZoneRoutingModule { }