import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Http } from  '@angular/http';
import { CustomPromisify } from 'util';
import { observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ActivitytService {
  public httpOptions : any;
  APIURL  = "http://localhost:8001";
  constructor(private httpClient: HttpClient,private http: Http) { }
  getActivityPage(){
    return this.httpClient.get("http://localhost:8001/activities");
  }
  public addActivity (customer :any){
    return this.http.post("http://localhost:8001/activities", customer, this.httpOptions);
  }
}
