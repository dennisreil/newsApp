import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  articles;
  ionViewDidEnter(){

    this.apiService.getUsa().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
  constructor(private apiService: ApiService) {}

}
