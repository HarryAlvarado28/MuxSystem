import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolsService {

  constructor(private _http: HttpClient) { }

  obtenerRoles() {
    return this._http.get('localhost:2828/rols').pipe(map(((resp: any) => { return resp })))
  }


}
