import { Injectable } from '@angular/core';
import { ISurvey } from '../interfaces/ISurvey';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  
  constructor(private http : HttpClient) { }

  public getSurvey(id: number) {
    return this.http.get("https://localhost:44360/api/surveys/1")
  }
}
