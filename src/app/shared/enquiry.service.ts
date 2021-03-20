import { Injectable } from '@angular/core';
import { Enquiry } from './enquiry.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/enquiry';

  formData: Enquiry = new Enquiry();
  list: Enquiry[];

  postEnquiry() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEnquiry() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Enquiry[]);
  }
  
  deleteEnquiry(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
