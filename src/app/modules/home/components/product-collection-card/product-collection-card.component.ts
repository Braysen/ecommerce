import { Component, Input, OnInit } from '@angular/core';
import { ProductCollection } from 'src/app/core/interfaces/product.interface'

@Component({
  selector: 'app-product-collection-card',
  templateUrl: './product-collection-card.component.html',
  styleUrls: ['./product-collection-card.component.sass']
})
export class ProductCollectionCardComponent implements OnInit{
  @Input()productCollectionData!: ProductCollection;

  async ngOnInit(): Promise<void> {
  }

}
