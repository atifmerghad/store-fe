import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Location } from "@angular/common";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location, private productService: ProductService) { }

  isRtl =  localStorage.getItem('currentLang')=='ar';

  ngOnInit(): void {
  }

  callParentselectLang() {
      const lang :any =  (localStorage.getItem('currentLang') &&localStorage.getItem('currentLang')=='en' )? 'ar':'en';
      this.productService.currentLang = lang;
      localStorage.setItem('currentLang', lang);
      location.reload();
  }

  header2_items =[
    {
      name : "FEMME",
      name_ar : "المرأة",
      url :"/femme"
    },
    {
      name : "HOMME",
      name_ar : "الرجال",
      url :"/homme"
    },
    {
      name : "BEAUTÉ",
      name_ar : "جمال",
      url :"/beaute"
    },
    {
      name : "MAISON",
      name_ar : "منزل",
      url :"/maison"
    }
  ]
  header3_items = [
    {
      name : "NOUVEAUTÉS",
      name_ar : "الإخبارية",
      url :"/"
    },
    {
      name : "VÊTEMENTS",
      name_ar : "ملابس",
      url :"/"
    },
    {
      name : "TENDANCES",
      name_ar : "اتجاهات",
      url :"/"
    },
    {
      name : "ROBES ",
      name_ar : "فساتين",
      url :"/"
    },
    {
      name : "PROMOS",
      name_ar : "الترقيات",
      url :"/"
    },
    {
      name : "CHAUSSURES & ACCS",
      name_ar : "الأحذية والإكسسوارات",
      url :"/"
    },
    {
      name : "E-CARTE CADEAU",
      name_ar : "كرت هدية",
      url :"/"
    },
    {
      name : "EXPLOREZ",
      name_ar : "يكتشف",
      url :"/EXPLOREZ"
    },







  ]

}
