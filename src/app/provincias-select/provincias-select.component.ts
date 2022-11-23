import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../services/provincias.service';

export interface Provincia {
  id: number;
  nombre: string;
  api: string;
}
@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.css'],
})
export class ProvinciasSelectComponent implements OnInit {
  // provincias: string[] = [
  //   'Buenos Aires',
  //   'CABA',
  //   'Catamarca',
  //   'Chaco',
  //   'Chubut',
  //   'Córdoba',
  //   'Corrientes',
  //   'Entre Ríos',
  // ]
  provincias: Provincia[] = [];

  provinciaSlctd: Provincia = {
    id: 0,
    nombre: '',
    api: '',
  };

  constructor(private provSrv: ProvinciasService) {
    provSrv.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  }

  ngOnInit(): void {}
}
