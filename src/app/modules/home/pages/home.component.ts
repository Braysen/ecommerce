import { Component, OnInit } from '@angular/core';
import { ProductCollection } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{//width: 500 effort: 4 quality: 75
  public productCollectionDataFake: ProductCollection[] = [
    {
      name: "For men",
      picture: "../../../../../assets/images/promo1.webp"
    },
    {
      name: "Casual Shoes",
      picture: "../../../../../assets/images/rsz_promo2.webp"
    },
    {
      name: "For Women",
      picture: "../../../../../assets/images/promo3.webp"
    },
    {
      name: "Leather Belts",
      picture: "../../../../../assets/images/promo4.webp"
    },
    {
      name: "Designer Bags",
      picture: "../../../../../assets/images/promo5.webp"
    },
    {
      name: "Watches",
      picture: "../../../../../assets/images/promo6.webp"
    }
  ]
  ngOnInit(): void {
  }

}
