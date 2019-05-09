import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivitytService } from '../services/activity.service';
@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent implements OnInit {
 
  public postData;
  constructor(private activityService: ActivitytService, private fb: FormBuilder) {
  }

  ngOnInit() {
  }
  public add(){
    //Simple customer object is used for post the data using RestFul API Post Call.
    var data = {description :"Anil", contact: 1 , createdAt : "2019-05-09T07:26:39.384341Z"}

    this.activityService.addActivity(data)
        .subscribe(data => {
          this.postData = data;
          console.log(this.postData);
          
      });
    }
}


