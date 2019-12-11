import { Injectable } from '@angular/core';
import { ModelColecciones } from '../model/coleccion.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColeccionService {

  private _baseURL = 'http://localhost:2828/'
  constructor(private _http: HttpClient) { }

  coleccionObtener() {
    return this._http.get(`${this._baseURL}colecciones`).pipe(map(((resp: any) => { return resp })))
  }

  coleccionCreate(coleccion: ModelColecciones) {
    console.log("Coleccion:: ", coleccion)
    return this._http.post(`${this._baseURL}colecciones`, coleccion).pipe(map(((resp: any) => { return resp })))
  }

  coleccionUpdate(coleccion: ModelColecciones) {
    return this._http.put(`${this._baseURL}colecciones/${coleccion.id}`, coleccion).pipe(map(((resp: any) => { return resp })))
  }
}
