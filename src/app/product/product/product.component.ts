import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NavigationEnd, Router, RouterEvent } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products :any= [];

  constructor(
    private productService:ProductService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (res) =>{
        console.log(res);
        this.products = res;
      },
      (err) =>{

      }
    )
  }

  productDetials(product:any){
    this.router.navigate(["/product-details", product]);

  }
}
