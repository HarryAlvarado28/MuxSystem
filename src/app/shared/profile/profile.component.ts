import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModelUsuario } from 'src/app/model/user.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
  .example-container {
    display: flex;
    flex-direction: column;
  }
  
  .example-container > * {
    width: 100%;
  }
  
  .example-container form {
    margin-bottom: 20px;
  }
  
  .example-container form > * {
    margin: 5px 0;
  }
  
  .example-container .mat-radio-button {
    margin: 0 12px;
  }
  .example-container {
    display: flex;
    flex-direction: column;
  }
  
  .example-container > * {
    width: 100%;
  }
  `]
})
export class ProfileComponent implements OnInit {

  constructor(private _loginServer: LoginService, private _router: Router) { }
  myUser: ModelUsuario
  formProfile: FormGroup
  ngOnInit() {
    this.myUser = JSON.parse(localStorage.getItem('MyUser'))
    console.log("My USER:: ", this.myUser)
    this.formProfile = new FormGroup({
      f_nombre: new FormControl(this.myUser.nombre, Validators.required),
      f_apellido: new FormControl(this.myUser.apellido, Validators.required),
      f_username: new FormControl(this.myUser.username, Validators.required),
      f_email: new FormControl(this.myUser.email, [Validators.required, Validators.email]),
      f_genero: new FormControl(this.myUser.genero),
      f_fechaNacimiento: new FormControl(this.myUser.fechaNacimiento),
      f_telefono: new FormControl(this.myUser.telefono)
    })
  }
  // email = new FormControl('', [Validators.required, Validators.email]);
  // nombre = new FormControl('', [Validators.required]);
  // apellido = new FormControl('', [Validators.required]);
  // username = new FormControl('', [Validators.required]);
  // genero = new FormControl('');
  // fechaNacimiento = new FormControl('');
  // telefono = new FormControl('');

  getErrorMessage(controlName) {
    const notEmpty = 'No puedes dejar este campo en blanco.'
    if (controlName == 'f_email') {
      return this.formProfile['f_email'].hasError('required') ? notEmpty :
        this.formProfile['f_email'].hasError('email') ? '¡Correo no valido!' :
          '';

    } else if (controlName == 'f_nombre') {
      return this.formProfile[controlName].hasError('required') ? notEmpty :
        '';
    }
    else if (controlName == 'f_apellido') {
      return this.formProfile[controlName].hasError('required') ? notEmpty :
        '';
    }
    else if (controlName == 'f_username') {
      return this.formProfile[controlName].hasError('required') ? notEmpty :
        '';
    }
  }

  saveChanges() {
    if (this.formProfile.invalid) {
      console.log("No es falido el formlulario: ", this.formProfile.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }

    this.myUser.nombre = this.formProfile.value.f_nombre
    this.myUser.apellido = this.formProfile.value.f_apellido
    this.myUser.username = this.formProfile.value.f_username
    this.myUser.email = this.formProfile.value.f_email
    this.myUser.genero = this.formProfile.value.f_genero
    this.myUser.fechaNacimiento = this.formProfile.value.f_fechaNacimiento
    this.myUser.telefono = this.formProfile.value.f_telefono

    console.log("EL MYUSER despues del FORM tiene: ", this.myUser)
    this._loginServer.myUserUpdate(this.myUser).subscribe((resp: ModelUsuario) => {
      this.myUser = resp
      return this.myUser
    })
    Swal.fire('¡Excelente! 🌋', 'Los cambios se han realizado correctamente', 'success')
    console.log("El formulario tiene: ", this.formProfile.value)

  }

  out() {
    if (this.myUser.nombreRol == 'RolGenesis') {
      this._router.navigateByUrl('admin')
    }
  }

}
