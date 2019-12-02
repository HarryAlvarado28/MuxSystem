import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  formRol: FormGroup
  constructor() { }

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
    Swal.fire(`¡ROL "<strong>${this.formRol.value.rol_nombre}</strong>", creado!`, 'El rol se ha creado correctamente', 'success')
  }

}
