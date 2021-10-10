import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails :any = {};
  imageSrc = 'https://i.imgur.com/TAzli1U.jpg'

  constructor(    private activatedRoute: ActivatedRoute    ) { }

  ngOnInit(): void {
    this.productDetails = this.activatedRoute.snapshot.params;
    this.imageSrc = this.productDetails.image;
  }


   changeImage(element:any) {
    //var main_prodcut_image = document.getElementById('main_product_image');
    //main_prodcut_image.src = element.src;
    this.imageSrc = element;
    }
}
