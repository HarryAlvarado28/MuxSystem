import { Component, OnInit } from '@angular/core';
import { RolsService } from 'src/app/service/rols.service';
import { ModelRols } from 'src/app/model/rols.model';
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


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'activo', 'fechaInsertada', '_'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.rols);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(item) {
    console.log("Estas editando este elemento, ", item)
    this._route.navigateByUrl('/admin/rols/create', item)
    localStorage.setItem('01-edit-rol',JSON.stringify(item))
  }

}


import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];