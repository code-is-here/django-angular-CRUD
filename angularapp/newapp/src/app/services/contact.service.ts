import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Http } from  '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public httpOptions : any;
  APIURL  = "http://localhost:8001";
  constructor(private httpClient: HttpClient,private http: Http) { }
  getContactPage(){
    return this.httpClient.get("http://localhost:8001/contacts");
  }
  public addContact (data :any){
    return this.http.post("http://localhost:8001/contacts", data, this.httpOptions);
  }
}
