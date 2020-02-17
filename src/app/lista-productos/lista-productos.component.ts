import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.arrProductos = await this.productosService.getAll();
  }

  async manejarFiltro($event) {
    this.arrProductos = await this.productosService.getByCategory($event.target.value);
  }

  async manejarClickComprar(pProducto) {
    if (localStorage.getItem('token') === null) {
      // Creamos el carrito
      const response = await this.productosService.getToken();

      // Guardamos el carrito en el LS
      localStorage.setItem('token', response.token_cart);
    }

    // Guardamos el producto en el carrito
    const responseAdd = await this.productosService.agregarAlCarrito(pProducto);
    console.log(responseAdd);
  }
}
