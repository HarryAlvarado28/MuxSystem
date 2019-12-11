import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/area.service';
import { ModelAreas } from 'src/app/model/area.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.sass']
})
export class AreaListComponent implements OnInit {

  constructor(private _route: Router, private _areaService: AreaService) {
    console.log("adfasd ", this.dataSource.data)
  }
  area: ModelAreas[]
  ngOnInit() {
    this._areaService.areaObtener().subscribe((r: any) => {
      this.area = r
      console.log("Area Resp List item:: ", this.area)
      this.dataSource.data = this.area
    })
  }

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fechaInsertada', 'fechaUltMod', '_'];
  dataSource = new MatTableDataSource(this.area);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(item) {
    console.log("Estas editando este elemento, ", item)
    this._route.navigateByUrl('/admin/areas/form', item)
    localStorage.setItem('01-edit-area', JSON.stringify(item))
  }

}
