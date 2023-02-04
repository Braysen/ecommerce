import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCollectionCardComponent } from './product-collection-card/product-collection-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCollectionCardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    ProductCardComponent,
    ProductCollectionCardComponent
  ],
  providers: [
    provideImgixLoader("http://localhost:4200/assets/images")
  ]
})
export class HomeComponentsModule { }
