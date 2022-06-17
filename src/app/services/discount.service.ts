import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private apiUrl = 'http://localhost:5000/commodity'
  constructor(private httpClient:HttpClient) {}

  getCommodity (): Observable<any>{
    return this.httpClient.get(this.apiUrl);
  }
}
