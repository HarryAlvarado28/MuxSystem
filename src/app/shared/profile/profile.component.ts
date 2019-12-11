import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { ModelRols } from 'src/app/model/rols.model';
import { RolsService } from 'src/app/service/rols.service';
import { UsersService } from 'src/app/service/users.service';
import { ModelUsuario } from 'src/app/model/user.model';

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

  constructor(private _loginServer: LoginService, private _router: Router, private _rolsService: RolsService, private _userService: UsersService) { }
  myUser: ModelUsuario
  formProfile: FormGroup
  listRol: ModelRols[]
  ngOnInit() {
    this._rolsService.rolObtener().subscribe((resp: any) => {
      this.listRol = resp
      console.log(this.listRol)
      return this.listRol
    })

    console.log('EDITAR!!!')
    this.myUser = JSON.parse(localStorage.getItem('MyUser'))
    this._userService.userObtener(this.myUser.id).subscribe((resp: any) => {
      this.myUser = resp
    })
    this.formProfile = new FormGroup({

      fu_nombre: new FormControl('' || this.myUser.nombre, Validators.required),
      fu_apellido: new FormControl('' || this.myUser.apellido, Validators.required),
      fu_activo: new FormControl('' || this.myUser.activo),
      fu_idrol: new FormControl(0 || this.myUser.idRol),
      fu_genero: new FormControl('' || this.myUser.genero),
      fu_telefono: new FormControl('' || this.myUser.telefono),
      fu_email: new FormControl('' || this.myUser.email),
      fu_fechaNacimiento: new FormControl('' || this.myUser.fechaNacimiento),
      fu_username: new FormControl('' || this.myUser.username, Validators.required),
      fu_password: new FormControl('' || this.myUser.password),
      fu_password_confi: new FormControl('' || this.myUser.password),
    })
    console.log("My myUser:: ", this.myUser)
  }

  saveChanges() {
    if (this.formProfile.invalid) {
      console.log("No es falido el formlulario: ", this.formProfile.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    } else if (this.formProfile.value.fu_password != this.formProfile.value.fu_password_confi) {
      Swal.fire('¡Contraseña no coinciden!', 'Favor, asegurece de que las contraseñas sean iguales', 'error')
      return
    }

    this.myUser.nombre = this.formProfile.value.fu_nombre
    this.myUser.apellido = this.formProfile.value.fu_apellido
    this.myUser.username = this.formProfile.value.fu_username
    this.myUser.email = this.formProfile.value.fu_email
    this.myUser.idRol = this.formProfile.value.fu_idrol
    this.myUser.activo = this.formProfile.value.fu_activo
    this.myUser.telefono = this.formProfile.value.fu_activo
    this.myUser.fechaNacimiento = this.formProfile.value.fu_fechaNacimiento
    this.myUser.genero = this.formProfile.value.fu_genero
    this.myUser.idUsuarioInsercion = this.myUser.id
    this.myUser.password = this.formProfile.value.fu_password
    console.log("myUser for PUT UPDATE: ", this.myUser)

    console.log("EL MYUSER despues del FORM tiene: ", this.myUser)
    this._loginServer.myUserUpdate(this.myUser).subscribe((resp: ModelUsuario) => {
      this.myUser = resp
      localStorage.setItem('MyUser', JSON.stringify(this.myUser))
      return this.myUser
    })
    Swal.fire('¡Excelente! 🌋', 'Los cambios se han realizado correctamente', 'success')
    console.log("El formulario tiene: ", this.formProfile.value)

  }

  out() {
    this._router.navigateByUrl('admin')
    // if (this.myUser.nombreRol == 'RolGenesis' || this.myUser.nombreRol == 'Admin' || this.myUser.nombreRol == 'AdminMux' || this.myUser.nombreRol == 'Administrador') {
    //   this._router.navigateByUrl('admin')
    // } else {
    //   this._router.navigateByUrl('mux')
    // }
  }

}
