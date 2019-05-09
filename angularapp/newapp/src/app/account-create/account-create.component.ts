import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
public postData;
  constructor(private accountService: AccountService, private fb: FormBuilder) { }

  ngOnInit() {
  }
  public add(){
    //Simple customer object is used for post the data using RestFul API Post Call
    // "id","name","email","phone","website","description","isActive", "createdBy".
    var data = {name :"Bharat", email:"amber@nickelfox.com" , phone: "1234567", website: "http://www.techfaq.in", description: "Hello", isActive: "True", createdBy: 1}

    this.accountService.addAccount(data)
        .subscribe(data => {
          this.postData = data;
          console.log(this.postData);
          
      });
    }

}
