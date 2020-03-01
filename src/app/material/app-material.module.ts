import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule, 
  MatListModule,
  MatTabsModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ]
})
export class AppMaterialModule { }
