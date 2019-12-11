import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModelUsuario } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService, private router: Router) { }

  vformLogin: FormGroup
  ngOnInit() {
    this.vformLogin = new FormGroup({
      'usuario': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required)
    })
  }

  iniciarSesion() {
    if (this.vformLogin.invalid) {
      console.log("Daltas datos!!!! no puedes dejar campos en blanco!!! - ")
      console.log("No es falido el formlulario: ", this.vformLogin.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    // if (this.vformLogin.value.usuario == "admin-mux" && this.vformLogin.value.contrasena == "1234") {
    //   console.log("Estas accediendo como Administrador!!!")
    //   this.router.navigate(['admin'])
    // } else {

    // }
    // this._loginService.insertDataUser(this.vformLogin.value)
    this._loginService.login({ username: this.vformLogin.value.usuario, password: this.vformLogin.value.contrasena }).subscribe((resp: any) => {
      console.log("respuesta del POST- Acceso Usuario: ", resp)
      localStorage.setItem('MyUser', JSON.stringify(resp))
      console.log("Rol del sujeto: ", resp.nombreRol)
      if (resp.nombreRol == 'RolGenesis') {
        console.log('Usuarios con privilegios de ADMIN ROL')
        this.router.navigate(['admin'])
      } else {
        console.log('Usuario sin privilegios de ADMIN')
        this.router.navigate(['mux'])
      }

    })
    console.log("Estas en el Login!!! - ", this.vformLogin.value)
  }

}
