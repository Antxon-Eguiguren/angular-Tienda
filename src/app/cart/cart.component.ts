import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.arrProductos = await this.productosService.getCart();
  }

  async manejarClickBorrardelCarrito(pProducto) {
    this.arrProductos = await this.productosService.deleteProductFromCart(pProducto);

    // Para actualizar la página después de borrar el producto del carrito
    this.arrProductos = await this.productosService.getCart();
  }

}
