import { Component ,OnInit} from '@angular/core';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'waterMango';
  plants: any;
  period: number;

  constructor( private plantsService: PlantsService) {
  }

  ngOnInit() {
    this.plantsService.getPlants().subscribe(data => {
      this.plants = data;
     });
  }

}
