import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ModelUsuario } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _baseURL = 'http://localhost:2828/'

  constructor(private _http: HttpClient) { }

  userObtener(id: number) {
    return this._http.get(`${this._baseURL}users/${id}`).pipe(map(((resp: any) => { return resp })))
  }

  userObtenerAll() {
    return this._http.get(`${this._baseURL}users`).pipe(map(((resp: any) => { return resp })))
  }

  userCreate(u: ModelUsuario) {
    console.log("Use POST-:: ", u)
    return this._http.post(`${this._baseURL}users`, u).pipe(map(((resp: any) => { return resp })))
  }

  userUpdate(u: ModelUsuario) {
    return this._http.put(`${this._baseURL}users/${u.id}`, u).pipe(map(((resp: any) => { return resp })))
  }

}
