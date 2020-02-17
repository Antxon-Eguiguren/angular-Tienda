import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from './models/producto';

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

  getByCategory(pCategory: string): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${pCategory}`).toPromise();
  }

  getToken(): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/newcart`, {}).toPromise();
  }

  agregarAlCarrito(pProducto: Producto): Promise<any> {
    const body = {
      item_id: pProducto.id
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem('token')
      })
    };
    return this.httpClient.post<any>(`${this.baseUrl}/new`, body, httpOptions).toPromise();
  }

}
