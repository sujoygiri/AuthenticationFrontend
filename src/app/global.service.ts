import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=33d63b7f6f6a42a9a1433c5b99fe6fce"

  constructor(private http: HttpClient) {
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.URL)
  }
}
