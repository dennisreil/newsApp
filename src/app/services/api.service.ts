import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //personal api key for retrieving data
  API_KEY= '8e7a57d7590f49cda407027dff3a13b6';


  //India news articles API function
    getIndia() {return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`);
  }
  
  //US news articles API function
    getUsa() {return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`);
  }
  
  constructor(private httpClient: HttpClient) {
    
  }
}  

