import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[]=[]

 constructor(private productoservice:ProductService){
 }

  ngOnInit(): void {
   this.productoservice.getProducts().subscribe(
    data=> this.products=data
   );
  }

}
