import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ModelRols } from '../model/rols.model';

@Injectable({
  providedIn: 'root'
})
export class RolsService {
  private _baseURL = 'http://localhost:2828/'
  constructor(private _http: HttpClient) { }

  rolObtener() {
    return this._http.get(`${this._baseURL}rols`).pipe(map(((resp: any) => { return resp })))
  }

  rolCreate(rol: ModelRols) {
    console.log("Rol:: ", rol)
    return this._http.post(`${this._baseURL}rols`, rol).pipe(map(((resp: any) => { return resp })))
  }

  rolUpdate(rol: ModelRols) {
    return this._http.put(`${this._baseURL}rols/${rol.id}`, rol).pipe(map(((resp: any) => { return resp })))
  }

}
