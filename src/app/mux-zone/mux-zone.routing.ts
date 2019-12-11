import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MHomeComponent } from './m-home/m-home.component';
import { ProfileComponent } from '../shared/profile/profile.component';

const routesMuxZone: Routes = [
    // { path: '_', component: HomeComponent },
    { path: 'home', component: MHomeComponent },
    // { path: 'users', component: UsersComponent },
    // {
    //     path: 'rols', component: RolesComponent, children: [
    //         { path: '', component: RolsComponent },
    //         { path: 'create', component: CreateComponent },
    //     ]
    // },
    // { path: 'areas', component: AreasComponent },
    // { path: 'collections', component: ColeccionesComponent },
    // { path: 'articles', component: ArticulosComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routesMuxZone)],
    exports: [RouterModule]
})

export class MuxZoneRoutingModule { }