import { Component ,OnInit} from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'store-fe';
  supportLanguages = ["en", "ar"];
  currentLang :string= "ar";
  direction : string | undefined;

  products :any= [];
  constructor(
    private productService:ProductService,
    private translateService: TranslateService){
      this.translateService.addLangs(this.supportLanguages);
      this.translateService.setDefaultLang(this.currentLang);
      this.selectLang("en");

    }

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

    getCurrentLang() {
      return this.translateService.currentLang;
    }

    selectLang(lang: string) {
      this.translateService.use(lang);
      if (lang == "ar") {
        this.direction = "rtl";
      } else {
        this.direction = "ltr";
      }
      console.log(this.direction);
    }
  
}
