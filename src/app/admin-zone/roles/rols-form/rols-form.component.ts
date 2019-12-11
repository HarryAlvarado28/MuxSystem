import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelRols } from 'src/app/model/rols.model';
import { Router } from '@angular/router';
import { RolsService } from 'src/app/service/rols.service';
import Swal from 'sweetalert2';
import { ModelUsuario } from 'src/app/model/user.model';

@Component({
  selector: 'app-rols-form',
  templateUrl: './rols-form.component.html',
  styles: [`.example-container {
    display: flex;
    flex-direction: column;
  }
  .example-container > * {
    width: 100%;
  }
  `]
})
export class RolsFormComponent implements OnInit {

  formRol: FormGroup
  rol: ModelRols = {}
  constructor(private _route: Router, private _rolService: RolsService) { }
  editRol: ModelRols | string
  myUser: ModelUsuario
  isNewData: boolean
  
  ngOnInit() {
    this.editRol = JSON.parse(localStorage.getItem('01-edit-rol')) || 'NotFound'
    this.myUser = JSON.parse(localStorage.getItem('MyUser')) || 'NotFound'

    if (this.editRol == 'NotFound') {
      console.log("Para cuando es nuevo")
      this.isNewData = true
    } else {
      console.log("EDITAR!!!!!")
      this.isNewData = false
    }

    this.formRol = new FormGroup({
      rol_nombre: new FormControl('' || (this.editRol as ModelRols).nombre, Validators.required),
      rol_descripcion: new FormControl('' || (this.editRol as ModelRols).descripcion, Validators.required),
      rol_activo: new FormControl('' || (this.editRol as ModelRols).activo, Validators.required)
    })

  }

  crearRol() {
    if (this.formRol.invalid) {
      console.log("No es falido el formlulario: ", this.formRol.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    console.log("Rol!!!", this.formRol.value)
    this.rol.nombre = this.formRol.value.rol_nombre
    this.rol.descripcion = this.formRol.value.rol_descripcion
    this.rol.activo = 'No'
    this.rol.idUsuarioInsercion = this.myUser.id
    this._rolService.rolCreate(this.rol).subscribe((resp: any) => {
      console.log("respuesta del POST- creando Rol: ", resp)
    })
    Swal.fire(`¡ROL "<strong>${this.formRol.value.rol_nombre}</strong>", creado!`, 'El rol se ha creado correctamente', 'success').then(() => { this.cleanData() })
  }

  editarRol() {
    if (this.formRol.invalid) {
      console.log("No es falido el formlulario: ", this.formRol.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    console.log("EDITANDO DATA!!! - Rol!!!", this.formRol.value)
    this.rol = (this.editRol as ModelRols)
    this.rol.nombre = this.formRol.value.rol_nombre
    this.rol.descripcion = this.formRol.value.rol_descripcion
    this.rol.activo = this.formRol.value.rol_activo
    this.rol.idUsuarioInsercion = this.myUser.id

    console.log("El rol ", this.rol)
    this._rolService.rolUpdate(this.rol).subscribe((resp: any) => {
      console.log("Method UPDATE-Rol: ", resp)
    })

    Swal.fire(`¡ROL "<strong>${this.formRol.value.rol_nombre}</strong>", actualizado!`, 'El rol se ha actualizado correctamente', 'success').then(() => { this.cleanData() })
  }

  cleanData() {
    this._route.navigateByUrl("admin/rols")
    localStorage.removeItem('01-edit-rol')
  }

}
