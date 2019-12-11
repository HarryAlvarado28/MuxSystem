import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/area.service';
import { ModelAreas } from 'src/app/model/area.model';
import { ColeccionService } from 'src/app/service/coleccion.service';
import { ModelColecciones } from 'src/app/model/coleccion.model';
import { ModelAreaColeccion } from 'src/app/model/area-coleccion.model';

@Component({
  selector: 'app-in-mux',
  templateUrl: './in-mux.component.html',
  styleUrls: ['./in-mux.component.sass']
})
export class InMuxComponent implements OnInit {

  constructor(private _areaServices: AreaService, private _coleccionService: ColeccionService) { }
  listAreas: ModelAreas[]
  listColecciones: ModelColecciones[]
  listComplet: ModelAreaColeccion[]
  ngOnInit() {
    this._areaServices.areaObtener().subscribe((resp: any) => {
      this.listAreas = resp
      // this._coleccionService.coleccionObtener().subscribe((resp: any) => {
      //   this.listColecciones = resp

      //   this.listAreas.forEach(e => {
      //     this.listColecciones.forEach(i => {
      //       if (e.id == i.idArea) {
      //         this.listComplet.push({

      //         })
      //       }
      //     })
      //   });
      // })
    })
    this._coleccionService.coleccionObtener().subscribe((resp: any) => {
      this.listColecciones = resp

    })

  }



}
