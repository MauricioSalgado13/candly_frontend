import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CategoriesComponent]
})
export class CategoriesModule { }
