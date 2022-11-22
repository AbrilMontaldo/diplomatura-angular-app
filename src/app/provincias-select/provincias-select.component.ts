import { Component, OnInit } from '@angular/core';
import {ProvinciasSrvService} from '../services/provincias.service';

@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.css']
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
  provincias: any[] = []

  provinciaSlctd: any = {
    id: 0,
    nombre: '',
    url: ''
  }

  constructor(private provSrv: ProvinciasSrvService) {
    provSrv.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    })
   }

  ngOnInit(): void {
  }

}
