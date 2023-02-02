import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products-page/products.component';
import { ProductDetailComponent } from './pages/product-detail-page/product-detail.component';
import { LayoutMasterModule } from '../../shared/layout/layout.module'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LayoutMasterModule
  ]
})
export class ProductsModule { }