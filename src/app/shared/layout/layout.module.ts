import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { LayoutMasterComponent } from './layout-master/layout-master.component';
import { GlobalComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LayoutMasterComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    LayoutMasterComponent
  ]
})
export class LayoutMasterModule { }
