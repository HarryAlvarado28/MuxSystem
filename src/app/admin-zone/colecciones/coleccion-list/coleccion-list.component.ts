import { Component, OnInit } from '@angular/core';
import { ModelColecciones } from 'src/app/model/coleccion.model';
import { ColeccionService } from 'src/app/service/coleccion.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coleccion-list',
  templateUrl: './coleccion-list.component.html',
  styleUrls: ['./coleccion-list.component.sass']
})
export class ColeccionListComponent implements OnInit {

  constructor(private _route: Router, private _coleccionService: ColeccionService) {
    console.log("adfasd ", this.dataSource.data)
  }
  coleccion: ModelColecciones[]
  ngOnInit() {
    this._coleccionService.coleccionObtener().subscribe((r: any) => {
      this.coleccion = r
      console.log("Coleccion Resp List item:: ", this.coleccion)
      this.dataSource.data = this.coleccion
    })
  }

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'nombreArea','fechaInsertada', 'fechaUltMod', '_'];
  dataSource = new MatTableDataSource(this.coleccion);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(item) {
    console.log("Estas editando este elemento, ", item)
    this._route.navigateByUrl('/admin/collections/form', item)
    localStorage.setItem('01-edit-coleccion', JSON.stringify(item))
  }

}
