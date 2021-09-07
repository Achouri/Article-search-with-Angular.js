import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newapi Url
  newsApiUrl = "https://newsapi.org/v2/everything?q=keyword&apiKey=fc41cec3a22c4fff90a9d9a04770e13b"

  topHeading(): Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

}
