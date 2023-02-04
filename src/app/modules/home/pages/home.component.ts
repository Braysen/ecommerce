import { Component, OnInit } from '@angular/core';
import { Product, ProductCollection } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  public productCollectionDataFake: ProductCollection[] = [
    {
      name: "For men",
      picture: "/promo1.webp",
      pictureWidth: 500,
      pictureHeight: 500
    },
    {
      name: "Casual Shoes",
      picture: "/rsz_promo2.webp",
      pictureWidth: 500,
      pictureHeight: 500
    },
    {
      name: "For Women",
      picture: "/promo3.webp",
      pictureWidth: 500,
      pictureHeight: 500
    },
    {
      name: "Leather Belts",
      picture: "/promo4.webp",
      pictureWidth: 500,
      pictureHeight: 500
    },
    {
      name: "Designer Bags",
      picture: "/promo5.webp",
      pictureWidth: 500,
      pictureHeight: 500
    },
    {
      name: "Watches",
      picture: "/promo6.webp",
      pictureWidth: 500,
      pictureHeight: 500
    }
  ]
  public productDataFake: Product[] = [
    {
      name: "Bambi Print Mini Backpack",
      price: 2000,
      picture: "/product1.webp",
      offerPrice: 0,
      pictureHeight: 300,
      pictureWidth: 300
    },
    {
      name: "Bambi Print Mini Backpack",
      price: 4000,
      picture: "/product2.webp",
      offerPrice: 0,
      pictureHeight: 300,
      pictureWidth: 300
    },
    {
      name: "Bambi Print Mini Backpack",
      price: 2000,
      picture: "/product3.webp",
      offerPrice: 0,
      pictureHeight: 300,
      pictureWidth: 300
    },
    {
      name: "Bambi Print Mini Backpack",
      price: 2000,
      picture: "/product4.webp",
      offerPrice: 0,
      pictureHeight: 300,
      pictureWidth: 300
    },
    {
      name: "Bambi Print Mini Backpack",
      price: 2000,
      picture: "/product5.webp",
      offerPrice: 0,
      pictureHeight: 300,
      pictureWidth: 300
    },
    {
      name: "Bambi Print Mini Backpack",
      price: 2000,
      picture: "/product6.webp",
      offerPrice: 0,
      pictureHeight: 300,
      pictureWidth: 300
    }
  ]
  ngOnInit(): void {
  }

}
