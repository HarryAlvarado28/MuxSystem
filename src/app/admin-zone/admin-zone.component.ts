import { Component, OnInit } from '@angular/core';
import { ModelUsuario } from '../model/user.model';
import { LoginService } from '../service/login.service';
import { ModelMenu } from '../model/menu.model';

@Component({
  selector: 'app-admin-zone',
  templateUrl: './admin-zone.component.html',
  styleUrls: ['./admin-zone.component.sass']
})
export class AdminZoneComponent implements OnInit {
  usuario: ModelUsuario
  constructor(private _loginServer: LoginService) { }
  listaMenu: ModelMenu[]
  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('MyUser'))
    this.listaMenu = JSON.parse(localStorage.getItem('menu'))
    this._loginServer.myUser(this.usuario.id).subscribe((resp: ModelUsuario) => {
      this.usuario = resp
      localStorage.setItem('MyUser', JSON.stringify(this.usuario))
    })
  }
  logout() {
    localStorage.removeItem('MyUser')
    localStorage.removeItem('menu')
  }

}
