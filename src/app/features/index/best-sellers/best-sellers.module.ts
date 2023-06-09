import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellersComponent } from './best-sellers.component';



@NgModule({
  declarations: [BestSellersComponent],
  imports: [
    CommonModule
  ],
  exports: [BestSellersComponent]
})
export class BestSellersModule { }
