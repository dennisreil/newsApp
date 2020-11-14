import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY= '8e7a57d7590f49cda407027dff3a13b6';

  getIndia() {return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`);
}
  
getUsa() {return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`);
}
  constructor(private httpClient: HttpClient) { 

  }
  }  

