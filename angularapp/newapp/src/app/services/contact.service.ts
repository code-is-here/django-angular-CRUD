import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  APIURL  = "http://localhost:8001";
  constructor(private httpClient: HttpClient) { }
  getContactPage(){
    return this.httpClient.get("http://localhost:8001/contacts");
  }
}
