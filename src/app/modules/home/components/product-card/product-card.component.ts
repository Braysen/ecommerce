import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit{
  @Input()productData!: Product;
  ngOnInit(): void {
    console.log(this.productData)
  }
}
