import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { RolsService } from 'src/app/service/rols.service';
import { ModelRols } from 'src/app/model/rols.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  formRol: FormGroup
  rol: ModelRols = { nombre: '', descripcion: '', activo: '', idUsuarioInsercion: 999 }
  constructor(private _rolService: RolsService) { }

  ngOnInit() {
    this.formRol = new FormGroup({
      rol_nombre: new FormControl('', Validators.required),
      rol_descripcion: new FormControl('', Validators.required)
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
    this.rol.idUsuarioInsercion = 29
    this._rolService.crearRol(this.rol).subscribe((resp: any) => {
      console.log("respuesta del POST- creando Rol: ", resp)
    })
    Swal.fire(`¡ROL "<strong>${this.formRol.value.rol_nombre}</strong>", creado!`, 'El rol se ha creado correctamente', 'success')
  }

}
