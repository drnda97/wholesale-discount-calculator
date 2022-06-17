import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { DiscountCalculatorComponent } from './components/discount-calculator/discount-calculator.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { ButtonComponent } from './components/button/button.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    DiscountCalculatorComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
