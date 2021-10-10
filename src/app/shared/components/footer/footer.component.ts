import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sections = [
    {
      title: "Products",
      title_ar: "المنتجات",
      items: [
        {
          name:"FStore",
          name_ar :"",
          url: ""
        },
        {
          name:"MDWordPress",
          name_ar :"",
          url: ""
        },
        {
          name:"BrandFlow",
          name_ar :"",
          url: ""
        },
        {
          name:"Bootstrap",
          name_ar :"",
          url: ""
        }
      ]
    }
  ]

}
