import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { WelcomeModule } from './welcome/welcome.module';
import { CategoriesModule } from './categories/categories.module';
import { BestSellersModule } from './best-sellers/best-sellers.module';
import { BenefitsModule } from './benefits/benefits.module';
import { CardProductModule } from 'src/app/shared/card-product/card-product.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    WelcomeModule,
    CategoriesModule,
    BestSellersModule,
    BenefitsModule,
    CardProductModule
  ],
  exports: [IndexComponent],
  providers: [],
  bootstrap: [IndexComponent]
})
export class IndexModule { }
