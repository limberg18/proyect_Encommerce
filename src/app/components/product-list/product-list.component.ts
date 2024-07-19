import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products : Product[]=[]

  constructor(private productoservice : ProductService){}
  ngOnInit(): void {
this.listaProductos();
  }
  listaProductos(){
    this.productoservice.getProducts().subscribe(
      data=> {this.products=data
      console.log(data);}
    );

  }
  deleteProductById(id: number){
    this.productoservice.deleteProductById(id).subscribe(
      ()=> this.listaProductos()
    );
  }

}
