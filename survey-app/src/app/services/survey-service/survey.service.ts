import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISurvey } from 'src/app/interfaces/ISurvey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http : HttpClient) { }

  public getSurvey(id: number) {
   var survey = this.http.get<ISurvey>("https://localhost:44360/api/surveys/1");
    return survey;
  }
}
