import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface Producto {
  ean: number;
  nombre: string;
  precio: number;
}
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
})
export class ProductosListComponent implements OnInit {
  productos: Producto[] = [];
  provinciaSlctd: string = 'tierra-del-fuego';

  constructor(
    productosSrv: ProductosService,
    actRoute: ActivatedRoute,
    private location: Location
  ) {
    const { nombreProvincia } = actRoute.snapshot.params;

    this.provinciaSlctd = nombreProvincia;

    productosSrv.getProductos(nombreProvincia).subscribe((data: any) => {
      this.productos = data;
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {}
}
