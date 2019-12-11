import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.sass']
})
export class ColeccionesComponent implements OnInit {

  principal = true
  constructor() { }

  ngOnInit() { }
  cleanData() {
    localStorage.removeItem('01-edit-coleccion')
  }
}
