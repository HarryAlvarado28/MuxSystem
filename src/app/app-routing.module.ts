import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminZoneComponent } from './admin-zone/admin-zone.component';
import { MuxZoneComponent } from './mux-zone/mux-zone.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminZoneComponent,
    loadChildren: () => import('./admin-zone/admin-zone.module')
      .then(m => m.AdminZoneModule),
  },
  {
    path: 'mux',
    component: MuxZoneComponent,
    loadChildren: () => import('./mux-zone/mux-zone.module')
      .then(m => m.MuxZoneModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
