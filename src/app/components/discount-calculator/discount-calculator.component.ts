import { Component, OnInit } from '@angular/core';
import { Customers } from "../../Customers";
import { Discount } from "../../Discount";
import {CustomerService} from "../../services/customer.service";
import {DiscountService} from "../../services/discount.service";

@Component({
  selector: 'app-discount-calculator',
  templateUrl: './discount-calculator.component.html',
  styleUrls: ['./discount-calculator.component.css']
})
export class DiscountCalculatorComponent implements OnInit {
  customers: Customers[] = [];
  commodity: Discount[] = [];
  quantity: number | undefined;
  customerID: number | undefined;
  commodityID: number | undefined;
  choosedCustomer: Customers | undefined;
  choosedCommodity: Discount | undefined;

  constructor(private customerService: CustomerService, private discountService: DiscountService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
    this.discountService.getCommodity().subscribe((commodity) => {
      this.commodity = commodity;
    });
  }
  changeCustomer(){
    this.choosedCustomer = this.customers.find(c => c.id == this.customerID);
  }
  changeCommodity(){
    this.choosedCommodity = this.commodity.find(c => c.id == this.commodityID);
    if(this.quantity && this.quantity > 0){
      // @ts-ignore
      this.choosedCommodity.newPrice = this.choosedCommodity.price * this.quantity;
      // @ts-ignore
      if(this.choosedCommodity.quantity <= this.quantity){
        // @ts-ignore
        this.choosedCommodity.discountedPrice = (this.choosedCommodity.discount / 100) * this.choosedCommodity.price * this.quantity;
      }
    }
  }
  changeQuantity(){
    // @ts-ignore
    if(this.choosedCommodity && this.quantity > 0){
      // @ts-ignore
      this.choosedCommodity.newPrice = this.choosedCommodity.price * this.quantity;
      // @ts-ignore
      if(this.choosedCommodity.quantity <= this.quantity){
        // @ts-ignore
        this.choosedCommodity.discountedPrice = (this.choosedCommodity.discount / 100) * this.choosedCommodity.price * this.quantity;
      }
    }
  }
}
