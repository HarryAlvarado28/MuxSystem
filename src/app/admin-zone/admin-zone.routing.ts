import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RolesComponent } from './roles/roles.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AreasComponent } from './areas/areas.component';
import { RolsComponent } from './roles/rols/rols.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { RolsFormComponent } from './roles/rols-form/rols-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { AreaListComponent } from './areas/area-list/area-list.component';
import { AreaFormComponent } from './areas/area-form/area-form.component';
import { ColeccionListComponent } from './colecciones/coleccion-list/coleccion-list.component';
import { ColeccionFormComponent } from './colecciones/coleccion-form/coleccion-form.component';

const routesAdminZone: Routes = [
    // { path: '_', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: '', component: UserListComponent },
            { path: 'form', component: UserFormComponent },
        ]
    },
    {
        path: 'rols', component: RolesComponent, children: [
            { path: '', component: RolsComponent },
            { path: 'form', component: RolsFormComponent },
        ]
    },
    {
        path: 'areas', component: AreasComponent, children: [
            { path: '', component: AreaListComponent },
            { path: 'form', component: AreaFormComponent },
        ]
    },
    {
        path: 'collections', component: ColeccionesComponent, children: [
            { path: '', component: ColeccionListComponent },
            { path: 'form', component: ColeccionFormComponent },
        ]
    },
    { path: 'articles', component: ArticulosComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'admin', redirectTo: 'admin/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routesAdminZone)],
    exports: [RouterModule]
})

export class AdminZoneRoutingModule { }