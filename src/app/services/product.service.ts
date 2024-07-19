import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private upiurl: string ="http://localhost:8085/api/v1/admin/productos";

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]>{
return this.httpClient.get<Product[]>(this.upiurl);
  }

  createProduct( product:Product):Observable<any>{

    return this.httpClient.post(this.upiurl+"/save",product)
  }

  deleteProductById(id:number):Observable<any>{
    return this.httpClient.delete(this.upiurl+"/"+id)
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.upiurl+"/"+id);

  }
}
