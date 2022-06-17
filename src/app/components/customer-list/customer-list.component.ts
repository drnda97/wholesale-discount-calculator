import { Component, OnInit } from '@angular/core';
import { Customers } from "../../Customers";
import { Discount } from "../../Discount";
import {CustomerService} from "../../services/customer.service";
import {DiscountService} from "../../services/discount.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customers[] = [];
  commodity: Discount[] = [];
  choosedCommodity: Discount | undefined;
  commodityID: number | undefined;
  displayStyle = "none";
  title: string = "Create";
  edit: boolean = false;
  search: string = '';
  name: string | undefined;
  surname: string | undefined;
  id: number | undefined;

  constructor(private customerService: CustomerService, private discountService: DiscountService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
    this.discountService.getCommodity().subscribe((commodity) => {
      this.commodity = commodity;
    });
  }

  openPopup() {
    this.edit = false;
    this.displayStyle = "block";
  }
  openPopupEdit(customer: Customers) {
    this.id = customer.id;
    this.edit = true;
    this.name = customer.name;
    this.surname = customer.surname;
    this.title = "Edit";
    this.displayStyle = "block"
  }
  closePopup() {
    this.displayStyle = "none";
  }
  setCustomer() {
    if(!this.name){
      alert('Please add Name');
      return
    }
    if(!this.surname){
      alert('Please add Surname');
      return
    }
    if(!this.choosedCommodity){
      alert('Please Choose Commodity');
      return
    }
    let Customer = {
      name: this.name,
      surname: this.surname,
      discount: [
        {
          commodityId: this.choosedCommodity.id,
          percentage: this.choosedCommodity.discount,
          commodity: this.choosedCommodity.commodity
        }
      ]
    }
    this.edit ? this.editCustomer(Customer) : this.createCustomer(Customer);

    this.name = '';
    this.surname = '';
    this.displayStyle = 'none';
  }
  createCustomer(customer: object){
    this.customerService.createCustomer(customer).subscribe((customer) => {
      this.customers.push(customer);
    })
  }
  editCustomer(customer: object){
    this.customerService.updateCustomer(customer, this.id).subscribe(() => {
      this.ngOnInit();
    })
  }
  changeCommodity(){
    this.choosedCommodity = this.commodity.find(c => c.id == this.commodityID);
    console.log(this.choosedCommodity);
  }
}
