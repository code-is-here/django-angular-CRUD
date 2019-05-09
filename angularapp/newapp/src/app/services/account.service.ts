import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from  '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public httpOptions : any;
  constructor(private httpClient: HttpClient,private http: Http) {}
    getAccountPage(){
      return this.httpClient.get("http://localhost:8001/accounts");
    }
    public addAccount (data :any){
      return this.http.post("http://localhost:8001/accounts", data, this.httpOptions);
    }
   
}
