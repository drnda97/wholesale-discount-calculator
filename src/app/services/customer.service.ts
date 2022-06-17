import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customers} from "../Customers";

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5000/customers'
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<Customers []>{
    return this.httpClient.get<Customers []>(this.apiUrl);
  }
  createCustomer(customer: any): Observable<Customers>{
    // @ts-ignore
    return this.httpClient.post<Customers>(`${this.apiUrl}`, customer, httpOptions);
  }
  updateCustomer(customer: any, id: any): Observable<Customers>{
    // @ts-ignore
    return this.httpClient.put<Customers>(`${this.apiUrl}/${id}`, customer, httpOptions);
  }
}
