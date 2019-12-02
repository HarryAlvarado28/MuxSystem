import { Component, OnInit } from '@angular/core';
import { RolsService } from 'src/app/service/rols.service';

@Component({
  selector: 'app-rols',
  templateUrl: './rols.component.html',
  styleUrls: ['./rols.component.sass']
})
export class RolsComponent implements OnInit {

  constructor(private _rolService: RolsService) { }

  ngOnInit() {
    this._rolService.obtenerRoles().subscribe((r: any) => {
      console.log("Index item:: ", r)
    })
  }

}
