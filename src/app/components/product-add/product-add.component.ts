import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/Product';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
product : Product= new Product();


constructor(private productservice:ProductService, private router : Router, private activaRouter : ActivatedRoute
  ,private toastr:ToastrService
){

}
  ngOnInit(): void {
    this.getProductById();
  }


  addProduct(){
    this.product.categoryId=3;
    this.product.userId=1;

    this.productservice.createProduct(this.product).subscribe(
data=> {console.log(data);
  if(this.product.id==null){
    this.toastr.success('Producto regitrado correctamente','Producto')
  }else{
    this.toastr.success('Producto actualizado correctamente','Producto')
  }
this.router.navigate(['admin/product'])
}
    );
}

getProductById(){
this.activaRouter.params.subscribe(
  prod=> {
    let id=prod['id'];
    if(id){
      console.log('el valor de la variable id es : '+id);
      this.productservice.getProductById(id).subscribe(
        data=> this.product=data
      );
    }
  }
);

}
}
