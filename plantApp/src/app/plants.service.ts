import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PlantsService {


  apiURL = 'https://localhost:5001/plants';
  constructor(private httpClient: HttpClient) { }

  getPlants(): any {
    return this.httpClient.get(this.apiURL);
  }
}
