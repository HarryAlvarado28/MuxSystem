import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ModelRols } from '../model/rols.model';

@Injectable({
  providedIn: 'root'
})
export class RolsService {
  // private _baseURL = 'http://localhost:1234/'
  private _baseURL = 'http://localhost:2828/'
  constructor(private _http: HttpClient) { }

  obtenerRoles() {
    // return this._http.get('localhost:2828/rols').pipe(map(((resp: any) => { return resp })))
    // return this._http.get(`${this._baseURL}api/users`).pipe(map(((resp: any) => { return resp })))
    return this._http.get(`${this._baseURL}rols`).pipe(map(((resp: any) => { return resp })))
  }

  crearRol(rol: ModelRols) {
    console.log("Rol:: ", rol)
    return this._http.post(`${this._baseURL}rols`, rol).pipe(map(((resp: any) => { return resp })))
  }

}
