import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor() { }
  myUser: ModelUsuario
  ngOnInit() {
    this.myUser = JSON.parse(localStorage.getItem('MyUser'))
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  nombre = new FormControl('', [Validators.required]);
  apellido = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  genero = new FormControl('');
  fechaNacimiento = new FormControl('');
  telefono = new FormControl('');

  getErrorMessage(controlName) {
    const notEmpty = 'No puedes dejar este campo en blanco.'
    if (controlName == 'email') {
      return this.email.hasError('required') ? notEmpty :
        this.email.hasError('email') ? '¡Correo no valido!' :
          '';

    } else if (controlName == 'nombre') {
      return this.nombre.hasError('required') ? notEmpty :
        '';
    }
    else if (controlName == 'apellido') {
      return this.apellido.hasError('required') ? notEmpty :
        '';
    }
    else if (controlName == 'username') {
      return this.apellido.hasError('required') ? notEmpty :
        '';
    }
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

}

export interface Food {
  value: string;
  viewValue: string;
}