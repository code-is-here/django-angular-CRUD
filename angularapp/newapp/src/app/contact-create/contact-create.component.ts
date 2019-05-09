import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
public postData;
  constructor(private contactService: ContactService, private fb:FormBuilder) { }

  ngOnInit() {
  }

  public add(){
    //Simple customer object is used for post the data using RestFul API Post Call.
    var data = {description :"Anil", contact: 1 , createdAt : "2019-05-09T07:26:39.384341Z"}

    this.contactService.addContact(data)
        .subscribe(data => {
          this.postData = data;
          console.log(this.postData);
          
      });
    }
}
