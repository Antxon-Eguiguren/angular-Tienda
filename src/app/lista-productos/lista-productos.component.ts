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

}
