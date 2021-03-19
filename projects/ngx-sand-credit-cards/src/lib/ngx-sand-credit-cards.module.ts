import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { creditCardDirective } from './directives/space.directive';
import { NgxSandCreditCardsComponent } from './ngx-sand-credit-cards/ngx-sand-credit-cards.component';



@NgModule({
  declarations: [NgxSandCreditCardsComponent, creditCardDirective],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [NgxSandCreditCardsComponent, creditCardDirective]
})
export class NgxSandCreditCardsModule { }
