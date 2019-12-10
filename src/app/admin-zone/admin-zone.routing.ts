import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RolesComponent } from './roles/roles.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AreasComponent } from './areas/areas.component';
import { CreateComponent } from './roles/create/create.component';
import { RolsComponent } from './roles/rols/rols.component';
import { ProfileComponent } from '../shared/profile/profile.component';

const routesAdminZone: Routes = [
    // { path: '_', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    {
        path: 'rols', component: RolesComponent, children: [
            { path: '', component: RolsComponent },
            { path: 'create', component: CreateComponent },
        ]
    },
    { path: 'areas', component: AreasComponent },
    { path: 'collections', component: ColeccionesComponent },
    { path: 'articles', component: ArticulosComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'admin', redirectTo: 'admin/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routesAdminZone)],
    exports: [RouterModule]
})

export class AdminZoneRoutingModule { }