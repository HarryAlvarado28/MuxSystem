import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelAreas } from 'src/app/model/area.model';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/service/area.service';
import { ModelUsuario } from 'src/app/model/user.model';
import Swal from 'sweetalert2';
import { ModelColecciones } from 'src/app/model/coleccion.model';
import { ColeccionService } from 'src/app/service/coleccion.service';

@Component({
  selector: 'app-coleccion-form',
  templateUrl: './coleccion-form.component.html',
  styleUrls: ['./coleccion-form.component.sass']
})
export class ColeccionFormComponent implements OnInit {


  formColeccion: FormGroup
  coleccion: ModelColecciones = {}
  constructor(private _route: Router, private _areaService: AreaService, private _coleccionService: ColeccionService) { }
  editColeccion: ModelAreas | string
  myUser: ModelUsuario
  isNewData: boolean
  listArea: ModelAreas[]

  ngOnInit() {
    this.editColeccion = JSON.parse(localStorage.getItem('01-edit-coleccion')) || 'NotFound'
    console.log("editColeccion:: ", this.editColeccion)
    this.myUser = JSON.parse(localStorage.getItem('MyUser')) || 'NotFound'
    this._areaService.areaObtener().subscribe((resp: any) => {
      this.listArea = resp
      console.log("Lista Areas:: ", this.listArea)
      return this.listArea
    })
    if (this.editColeccion == 'NotFound') {
      console.log("Para cuando es nuevo")
      this.isNewData = true
    } else {
      console.log("EDITAR!!!!!")
      this.isNewData = false
    }

    this.formColeccion = new FormGroup({
      fc_nombre: new FormControl('' || (this.editColeccion as ModelColecciones).nombre, Validators.required),
      fc_descripcion: new FormControl('' || (this.editColeccion as ModelColecciones).descripcion, Validators.required),
      fc_descripcionL: new FormControl('' || (this.editColeccion as ModelColecciones).descripcionL, Validators.required),
      fc_urlImg: new FormControl('' || (this.editColeccion as ModelColecciones).urlImg, Validators.required),
      fc_idArea: new FormControl('' || (this.editColeccion as ModelColecciones).idArea, Validators.required),
    })

  }

  crearRol() {
    if (this.formColeccion.invalid) {
      console.log("No es falido el formlulario: ", this.formColeccion.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    this.coleccion.nombre = this.formColeccion.value.fc_nombre
    this.coleccion.descripcion = this.formColeccion.value.fc_descripcion
    this.coleccion.descripcionL = this.formColeccion.value.fc_descripcionL
    this.coleccion.idArea = this.formColeccion.value.fc_idArea
    this.coleccion.urlImg = this.formColeccion.value.fc_urlImg
    this.coleccion.idUsuarioInsercion = this.myUser.id
    console.log("POST--->Coleccion!!!", this.coleccion)

    this._coleccionService.coleccionCreate(this.coleccion).subscribe((resp: any) => {
      console.log("respuesta del POST- creando Coleccion: ", resp)
      Swal.fire(`Colección "<strong>${this.formColeccion.value.fc_nombre}</strong>", creado!`, 'La colección se ha creado correctamente', 'success').then(() => { this.cleanData() })
    })
  }

  editarRol() {
    if (this.formColeccion.invalid) {
      console.log("No es falido el formlulario: ", this.formColeccion.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    console.log("EDITANDO DATA!!! - Area!!!", this.formColeccion.value)
    this.coleccion.id = (this.editColeccion as ModelColecciones).id
    this.coleccion.nombre = this.formColeccion.value.fc_nombre
    this.coleccion.descripcion = this.formColeccion.value.fc_descripcion
    this.coleccion.descripcionL = this.formColeccion.value.fc_descripcionL
    this.coleccion.idArea = this.formColeccion.value.fc_idArea
    this.coleccion.urlImg = this.formColeccion.value.fc_urlImg
    this.coleccion.idUsuarioInsercion = this.myUser.id
    console.log("PUT--->Coleccion!!!", this.coleccion)
    this._coleccionService.coleccionUpdate(this.coleccion).subscribe((resp: any) => {
      console.log("respuesta del PUT- actualizando Coleccion: ", resp)
      Swal.fire(`Colección "<strong>${this.formColeccion.value.fc_nombre}</strong>", actualizado!`, 'La colección se ha actualizado correctamente', 'success').then(() => { this.cleanData() })
    })

  }

  cleanData() {
    this._route.navigateByUrl("admin/collections")
    localStorage.removeItem('01-edit-coleccion')
  }

}
