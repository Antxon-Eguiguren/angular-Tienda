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

      // Creamos el token del carrito
      const responseToken = await this.productosService.createToken();

      // Guardamos el token del carrito en el LS (en caso de que no estuviera ya creado)
      localStorage.setItem('token', responseToken.token_cart);
    }

    // Guardamos el producto en el carrito
    const responseAddToCart = await this.productosService.addToCart(pProducto);
    console.log(responseAddToCart);
  }
}
