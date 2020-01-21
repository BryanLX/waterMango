import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  @Input() plantName : string
  @Input() plantDescription : string
  @Input() photoUrl : string
  @Input() period : number;

  wateringStatus: any = 'not watered'
  wateringInProgress: boolean = false
  wateringTimer: any;
  wateringTimestamp: Date;
  waterable: boolean = true
  mode : any = 'determinate'
  // change the warning period to 60 means warning after 60 mintues 
  value = 0;

  constructor(private _snackBar: MatSnackBar) { }

  notification(message) {
    this._snackBar.open(message,'' ,
      {duration: 4000}
      );
  }

  startWatering(): void {
    if (!this.waterable) {
      this.notification('This flower has been watered recently');
      return
    }
    if (this.wateringStatus == 'watering') return
    this.wateringStatus = 'watering'
    this.wateringInProgress = true;
    this.wateringTimer = setInterval(() => {
      this.value = this.value + 1;
      if (this.value >=100){
        this.value = 0;
        clearInterval(this.wateringTimer);
        this.wateringInProgress = false;
        this.wateringStatus = 'watered'
        this.notification('watering is finished for '+ this.plantName);
        this.wateringTimestamp = new Date();
        this.waterable = false;
        setTimeout(() => this.waterable = true, 30000)
      }
    }, 100);
  }

  stopWatering(): void {
    if (this.wateringStatus != 'watering') return
    clearInterval(this.wateringTimer);
    this.wateringStatus = 'watering stopped'
  }

  ngOnInit() {
    setInterval(() => {
      var now =  new Date();
      if (!this.wateringTimestamp) return
      if (Math.abs(now.getTime()- this.wateringTimestamp.getTime()) > this.period*60000){
        this.notification(this.plantName+' need water now!!');
      }
    }, 60000);
  }

}