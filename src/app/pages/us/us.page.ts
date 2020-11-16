import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-us',
  templateUrl: 'us.page.html',
  styleUrls: ['us.page.scss']
})
export class UsPage {
  //object name the data from the api will be bound to
  articles;
  ionViewDidEnter(){

    this.apiService.getUsa().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
  constructor(private apiService: ApiService) {}

}
