import { Component, OnInit } from '@angular/core';
import { ModelUsuario } from '../model/user.model';
import { LoginService } from '../service/login.service';
import { ModelMenu } from '../model/menu.model';

@Component({
  selector: 'app-mux-zone',
  templateUrl: './mux-zone.component.html',
  styles: []
})
export class MuxZoneComponent implements OnInit {

  usuario: ModelUsuario
  constructor(private _loginServer: LoginService) { }
  listaMenu: ModelMenu[]
  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('MyUser'))
    this._loginServer.myUser(this.usuario.id).subscribe((resp: ModelUsuario) => {
      this.usuario = resp
      localStorage.setItem('MyUser', JSON.stringify(this.usuario))
      this.listaMenu = JSON.parse(localStorage.getItem('menu'))
    })
  }
  logout() {
    localStorage.removeItem('MyUser')
    localStorage.removeItem('menu')
  }

}
