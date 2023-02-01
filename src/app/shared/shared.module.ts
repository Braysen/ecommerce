import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMasterComponent } from './layout/layout-master/layout-master.component';



@NgModule({
  declarations: [
    LayoutMasterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutMasterComponent
  ]
})
export class SharedModule { }
