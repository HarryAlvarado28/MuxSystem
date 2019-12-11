import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelAreas } from 'src/app/model/area.model';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/service/area.service';
import { ModelUsuario } from 'src/app/model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styles: []
})
export class AreaFormComponent implements OnInit {

  formArea: FormGroup
  area: ModelAreas = {}
  constructor(private _route: Router, private _areaService: AreaService) { }
  editArea: ModelAreas | string
  myUser: ModelUsuario
  isNewData: boolean
  
  ngOnInit() {
    this.editArea = JSON.parse(localStorage.getItem('01-edit-area')) || 'NotFound'
    this.myUser = JSON.parse(localStorage.getItem('MyUser')) || 'NotFound'

    if (this.editArea == 'NotFound') {
      console.log("Para cuando es nuevo")
      this.isNewData = true
    } else {
      console.log("EDITAR!!!!!")
      this.isNewData = false
    }

    this.formArea = new FormGroup({
      fa_nombre: new FormControl('' || (this.editArea as ModelAreas).nombre, Validators.required),
      fa_descripcion: new FormControl('' || (this.editArea as ModelAreas).descripcion, Validators.required),
    })

  }

  crearRol() {
    if (this.formArea.invalid) {
      console.log("No es falido el formlulario: ", this.formArea.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    console.log("Area!!!", this.formArea.value)
    this.area.nombre = this.formArea.value.fa_nombre
    this.area.descripcion = this.formArea.value.fa_descripcion
    this.area.idUsuarioInsercion = this.myUser.id
    this._areaService.areaCreate(this.area).subscribe((resp: any) => {
      console.log("respuesta del POST- creando AREA: ", resp)
    })
    Swal.fire(`Area "<strong>${this.formArea.value.fa_nombre}</strong>", creado!`, 'El area se ha creado correctamente', 'success').then(() => { this.cleanData() })
  }

  editarRol() {
    if (this.formArea.invalid) {
      console.log("No es falido el formlulario: ", this.formArea.value)
      Swal.fire('¡No puedes dejar campos en blanco!', 'Asegurate de completar todos los campos para continuar', 'error')
      return
    }
    console.log("EDITANDO DATA!!! - Area!!!", this.formArea.value)
    this.area = (this.editArea as ModelAreas)
    this.area.nombre = this.formArea.value.fa_nombre
    this.area.descripcion = this.formArea.value.fa_descripcion
    this.area.idUsuarioInsercion = this.myUser.id

    console.log("El Area ", this.area)
    this._areaService.areaUpdate(this.area).subscribe((resp: any) => {
      console.log("Method UPDATE-Area: ", resp)
    })

    Swal.fire(`Area "<strong>${this.formArea.value.fa_nombre}</strong>", actualizado!`, 'El area se ha actualizado correctamente', 'success').then(() => { this.cleanData() })
  }

  cleanData() {
    this._route.navigateByUrl("admin/areas")
    localStorage.removeItem('01-edit-area')
  }

}
