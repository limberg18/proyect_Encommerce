import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent  {
product : Product= new Product();


constructor(private productservice:ProductService){}


  addProduct(){
    this.product.categoryId=3;
    this.product.userId=1;

    this.productservice.createProduct(this.product).subscribe({

      next: data=> alert("Producto registrado"),
      error: err=> alert("Usuario ya existe, no se puede registrar")
    }
    )
  }



}
