import { Component, OnInit } from '@angular/core';
import { RolsService } from 'src/app/service/rols.service';
import { ModelRols } from 'src/app/model/rols.model';
@Component({
  selector: 'app-rols',
  templateUrl: './rols.component.html',
  styleUrls: ['./rols.component.sass']
})
export class RolsComponent implements OnInit {

  constructor(private _rolService: RolsService) { }
  rols: ModelRols[]
  ngOnInit() {
    this._rolService.obtenerRoles().subscribe((r: any) => {
      this.rols = r
      console.log("Index item:: ", this.rols)
    })
  }

}
