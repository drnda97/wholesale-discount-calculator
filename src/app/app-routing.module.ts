import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from "./components/customer-list/customer-list.component";
import {DiscountCalculatorComponent} from "./components/discount-calculator/discount-calculator.component";

const routes: Routes = [
  {path: '', component:CustomerListComponent},
  {path: 'discount', component:DiscountCalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
