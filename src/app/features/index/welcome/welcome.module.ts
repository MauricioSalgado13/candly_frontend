import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeComponent
  ],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule { }
