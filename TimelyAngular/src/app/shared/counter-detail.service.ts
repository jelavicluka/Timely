import { Injectable } from '@angular/core';
import { CounterDetail } from './counter-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CounterDetailService {

  constructor(private http:HttpClient) { }

  formData:CounterDetail = new CounterDetail();
  list : CounterDetail[];

  readonly baseURL = 'http://localhost:36767/api/Counters';

  postCounterDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as CounterDetail[]);
  }
}
