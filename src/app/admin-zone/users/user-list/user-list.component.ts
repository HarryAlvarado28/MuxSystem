import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import { ModelUsuario } from 'src/app/model/user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  constructor(private _route: Router, private _usersService: UsersService) {
    console.log("Data:: ", this.dataSource.data)
  }

  users: ModelUsuario[]

  ngOnInit() {
    this._usersService.userObtenerAll().subscribe((u: any) => {
      this.users = u
      console.log("Userss ", this.users)
      this.dataSource.data = this.users
    })
  }
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'username', 'activo', 'nombreRol', 'fechaInsercion', 'fechaUltMod', '_']
  dataSource = new MatTableDataSource(this.users)
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(e) {
    console.log("El elemnto select:: ", e)
    this._route.navigateByUrl('/admin/users/form', e)
    localStorage.setItem('02-edit-user', JSON.stringify(e))
  }
}
