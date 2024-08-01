import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/Product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productoservice: ProductService, private toastr : ToastrService) {}

  ngOnInit(): void {
    this.listaProductos();
  }

  listaProductos() {
    this.productoservice.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
  deleteProductById(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoservice
        .deleteProductById(id)
        .subscribe(() => this.listaProductos());
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });





  }
}
