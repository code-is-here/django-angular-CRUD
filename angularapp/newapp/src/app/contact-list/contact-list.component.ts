import { Component, OnInit } from '@angular/core';
import {ContactService} from "../services/contact.service";
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'first_name', 'last_name', 'email', 'phone', 'account', 'createdBy', 'createdAt', 'isActive'];
  dataSource  = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.fetchContacts();
  }
  fetchContacts(){
this.contactService.getContactPage().subscribe((data: Array<object>)=>{
  this.dataSource =  data;
  console.log(data);
})
  }

}
