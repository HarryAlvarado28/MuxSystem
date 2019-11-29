import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

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
    }
    if (this.vformLogin.value.usuario == "admin-mux" && this.vformLogin.value.contrasena == "1234") {
      console.log("Estas accediendo como Administrador!!!")
      this.router.navigate(['admin'])
    } else {

    }
    this._loginService.insertDataUser(this.vformLogin.value)
    console.log("Estas en el Login!!! - ", this.vformLogin.value)
  }

}
