import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelUsuario } from 'src/app/model/user.model';
import Swal from 'sweetalert2';
import { RolsService } from 'src/app/service/rols.service';
import { ModelRols } from 'src/app/model/rols.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [`.example-container {
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
  }`]
})
export class UserFormComponent implements OnInit {

  constructor(private _router: Router, private _userService: UsersService, private _rolsService: RolsService) { }

  formUser: FormGroup
  user: ModelUsuario = {}
  editUser: ModelUsuario | string
  myUser: ModelUsuario
  isNewData: boolean
  listRol: ModelRols[]
  ngOnInit() {
    this._rolsService.rolObtener().subscribe((resp: any) => {
      this.listRol = resp
      console.log(this.listRol)
      return this.listRol
    })
    console.log("Rol!!- ", this.listRol)
    this.editUser = JSON.parse(localStorage.getItem('02-edit-user')) || 'NotFound'
    this.myUser = JSON.parse(localStorage.getItem('MyUser')) || 'NotFound'
    if (this.editUser == 'NotFound') {
      console.log("Para cuando es nuevo!")
      this.isNewData = true
    } else {
      this.user = (this.editUser as ModelUsuario)
      console.log('EDITAR!!!')
      this.isNewData = false
      this._userService.userObtener(this.user.id).subscribe((resp: any) => {
        this.user = resp
      })
    }
    this.formUser = new FormGroup({
      fu_nombre: new FormControl('' || (this.editUser as ModelUsuario).nombre, Validators.required),
      fu_apellido: new FormControl('' || (this.editUser as ModelUsuario).apellido, Validators.required),
      fu_activo: new FormControl('' || (this.editUser as ModelUsuario).activo, Validators.required),
      fu_idrol: new FormControl(0 || (this.editUser as ModelUsuario).idRol, Validators.required),
      fu_genero: new FormControl('' || (this.editUser as ModelUsuario).genero),
      fu_telefono: new FormControl('' || (this.editUser as ModelUsuario).telefono),
      fu_email: new FormControl('' || (this.editUser as ModelUsuario).email),
      fu_fechaNacimiento: new FormControl('' || (this.editUser as ModelUsuario).fechaNacimiento),
      fu_username: new FormControl('' || (this.editUser as ModelUsuario).username, Validators.required),
      fu_password: new FormControl('' || (this.editUser as ModelUsuario).password),
      fu_password_confi: new FormControl('' || (this.editUser as ModelUsuario).password),
    })

  }

  crearRol() {
    if (this.formUser.invalid) {
      console.log("No es falido el formlulario: ", this.formUser.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    } else
      if (this.formUser.value.fu_password != this.formUser.value.fu_password_confi) {
        Swal.fire('¡Contraseña no coinciden!', 'Favor, asegurece de que las contraseñas sean iguales', 'error')
        return
      }
    console.log("Form Value User!!!", this.formUser.value)

    this.user.nombre = this.formUser.value.fu_nombre
    this.user.apellido = this.formUser.value.fu_apellido
    this.user.username = this.formUser.value.fu_username
    this.user.email = this.formUser.value.fu_email
    this.user.idRol = this.formUser.value.fu_idrol
    this.user.activo = this.formUser.value.fu_activo
    this.user.telefono = this.formUser.value.fu_activo
    this.user.fechaNacimiento = this.formUser.value.fu_fechaNacimiento
    this.user.genero = this.formUser.value.fu_genero
    this.user.idUsuarioInsercion = this.myUser.id
    this.user.password = this.formUser.value.fu_password
    console.log("User for POST CREATE: ", this.user)

    this._userService.userCreate(this.user).subscribe((resp: any) => {
      console.log(resp)
      Swal.fire(`Usuario "<strong>${this.formUser.value.fu_username}</strong>", creado!`, 'El usuario se ha creado correctamente', 'success').then(() => { this.cleanData() })
    })
  }

  saveChanges() {
    console.log("Editando!!!!!!")
    if (this.formUser.invalid) {
      console.log("No es falido el formlulario: ", this.formUser.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    } else if (this.formUser.value.fu_password != this.formUser.value.fu_password_confi) {
      Swal.fire('¡Contraseña no coinciden!', 'Favor, asegurece de que las contraseñas sean iguales', 'error')
      return
    }
    console.log("Form Value User!!!", this.formUser.value)

    this.user.nombre = this.formUser.value.fu_nombre
    this.user.apellido = this.formUser.value.fu_apellido
    this.user.username = this.formUser.value.fu_username
    this.user.email = this.formUser.value.fu_email
    this.user.idRol = this.formUser.value.fu_idrol
    this.user.activo = this.formUser.value.fu_activo
    this.user.telefono = this.formUser.value.fu_activo
    this.user.fechaNacimiento = this.formUser.value.fu_fechaNacimiento
    this.user.genero = this.formUser.value.fu_genero
    this.user.idUsuarioInsercion = this.myUser.id
    this.user.password = this.formUser.value.fu_password
    console.log("User for PUT UPDATE: ", this.user)

    this._userService.userUpdate(this.user).subscribe((resp: any) => {
      Swal.fire(`Usuario "<strong>${this.formUser.value.fu_username}</strong>", actualizado!`, 'El usuario se ha actualizado correctamente', 'success').then(() => { this.cleanData() })
    })
  }

  out() {
    if (this.myUser.nombreRol == 'RolGenesis') {
      this._router.navigateByUrl('admin')
      this.cleanData()
    }
  }

  cleanData() {
    this._router.navigateByUrl("admin/users")
    localStorage.removeItem('02-edit-user')
  }

}
