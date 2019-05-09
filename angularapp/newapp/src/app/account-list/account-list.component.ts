import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accountColumns :string[] = ["id","name","email","phone","website","description","isActive", "createdBy"];
  dataSource = []
  constructor(private accountService : AccountService) { }

  ngOnInit() {
    this.fetchAccounts()
  }
  fetchAccounts(){
    this.accountService.getAccountPage().subscribe((data :  Array<object>)=>{
      this.dataSource =  data;
      console.log(data);
  })

  }

}
