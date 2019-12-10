import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routesMuxZone: Routes = [
    // { path: '_', component: HomeComponent },
    // { path: 'home', component: HomeComponent },
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

];

@NgModule({
    imports: [RouterModule.forChild(routesMuxZone)],
    exports: [RouterModule]
})

export class MuxZoneRoutingModule { }