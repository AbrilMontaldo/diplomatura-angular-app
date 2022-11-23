import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProvinciasService {
  constructor(private http: HttpClient) {}

  getProvincias() {
    // return this.http.get('https://panalsoft.com/precios-justos/api/v1/provincias.json');
    return this.http.get('./assets/provincias.json');
  }
}
