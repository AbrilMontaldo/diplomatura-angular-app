import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

export interface Producto {
  ean: number,
  nombre: string,
  precio: number
}
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  productos: Producto[] = []
  provinciaSlctd: string = "catamarca";

  constructor(productosSrv: ProductosService) {
    productosSrv.getProductos(this.provinciaSlctd).subscribe((data: any) => {
      this.productos = data;
    });
  }

  ngOnInit(): void {
  }

}
