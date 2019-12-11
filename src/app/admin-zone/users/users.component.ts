import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  principal = true
  constructor() { }

  ngOnInit() { }
  cleanData() {
    localStorage.removeItem('01-edit-rol')
    localStorage.removeItem('02-edit-user')
  }

}
