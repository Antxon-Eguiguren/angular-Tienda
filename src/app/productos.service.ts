import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
