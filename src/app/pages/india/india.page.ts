import { Component} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-india',
  templateUrl: 'india.page.html',
  styleUrls: ['india.page.scss']
})
export class IndiaPage {
  //object name the data from the api will be bound to
  articles;
  ionViewDidEnter(){

    this.apiService.getIndia().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

  constructor(private apiService: ApiService) {

  }
}

