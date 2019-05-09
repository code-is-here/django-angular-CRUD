import { Component, OnInit } from '@angular/core';
import { ActivitytService } from '../services/activity.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
activityColumns :string[] = ['description','contact', 'createdAt'];
dataSource = []
  constructor(private activityService:ActivitytService) { }

  ngOnInit() {
    this.fetchActivities()
  }
  fetchActivities(){
    this.activityService.getActivityPage().subscribe((data: Array<object>)=>{
      this.dataSource =  data;
      console.log(data);
  })
  }
}
