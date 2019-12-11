import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { ModelUsuario } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private loginServices: LoginService) { }
  myUser: ModelUsuario
  ngOnInit() {
    this.myUser = JSON.parse(localStorage.getItem('MyUser'))
  }

}
