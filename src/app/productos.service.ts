import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from './models/producto';
import { ID_CARRITO } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://neolandshop.ngrok.io/items';
  }

  getAll(): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }

  getByCategory(pCategory: string): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/${pCategory}`).toPromise();
  }

  createToken(): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/newcart`, {}).toPromise();
  }

  addToCart(pProducto: Producto): Promise<any> {
    const body = {
      item_id: pProducto.id
    };
    return this.httpClient.post<any>(`${this.baseUrl}/new`, body, this.createHeaders()).toPromise();
  }

  // Marca como error pero está bien
  getCart(): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/cart`, this.createHeaders()).toPromise();
  }

  // Marca como error pero está bien
  deleteProductFromCart(pProducto): Promise<Producto[]> {
    return this.httpClient.delete<Producto[]>(`${this.baseUrl}/delete/${pProducto.id}`, this.createHeaders()).toPromise();
  }

  createHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem(ID_CARRITO)
      })
    };
  }

}
