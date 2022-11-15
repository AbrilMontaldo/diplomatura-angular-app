import { Component, OnInit } from '@angular/core';

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
  provincias: any[] = [
    { id: 1, nombre: 'Buenos Aires'},
    { id: 2, nombre: 'CABA'},
    { id: 3, nombre: 'Catamarca'},
    { id: 4, nombre: 'Chaco'},
    { id: 5, nombre: 'Chubut'},
    { id: 6, nombre: 'Córdoba'},
    { id: 7, nombre: 'Corrientes'},
    { id: 8, nombre: 'Entre Ríos'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
