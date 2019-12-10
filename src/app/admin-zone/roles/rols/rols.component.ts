import { Component, OnInit } from '@angular/core';
import { RolsService } from 'src/app/service/rols.service';
import { ModelRols } from 'src/app/model/rols.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rols',
  templateUrl: './rols.component.html',
  styleUrls: ['./rols.component.sass']
})



export class RolsComponent implements OnInit {

  constructor(private _route: Router, private _rolService: RolsService) {
    console.log("adfasd ", this.dataSource.data)
  }
  rols: ModelRols[]
  ngOnInit() {
    this._rolService.obtenerRoles().subscribe((r: any) => {
      this.rols = r
      console.log("Index item:: ", this.rols)
      this.dataSource.data = this.rols
    })
  }


  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'activo', 'fechaInsertada', '_'];
  dataSource = new MatTableDataSource(this.rols);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(item) {
    console.log("Estas editando este elemento, ", item)
    this._route.navigateByUrl('/admin/rols/create', item)
    localStorage.setItem('01-edit-rol', JSON.stringify(item))
  }

}
