import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ModelAreas } from '../model/area.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private _baseURL = 'http://localhost:2828/'
  constructor(private _http: HttpClient) { }

  areaObtener() {
    return this._http.get(`${this._baseURL}areas`).pipe(map(((resp: any) => { return resp })))
  }

  areaCreate(area: ModelAreas) {
    console.log("area:: ", area)
    return this._http.post(`${this._baseURL}areas`, area).pipe(map(((resp: any) => { return resp })))
  }

  areaUpdate(area: ModelAreas) {
    return this._http.put(`${this._baseURL}areas/${area.id}`, area).pipe(map(((resp: any) => { return resp })))
  }
}
