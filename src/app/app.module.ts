import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSandCreditCardsModule } from 'ngx-sand-credit-cards'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSandCreditCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
