import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ISurvey } from 'src/app/interfaces/ISurvey';
import { SurveyInputModel } from 'src/app/interfaces/SurveyInputModel';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http : HttpClient) { }

  public getSurvey(id: number) {
   var survey = this.http.get<ISurvey>("https://localhost:44360/api/surveys/1");
    return survey;
  }

  public postSurvey(survey) : Observable<SurveyInputModel>  {
  let result = {
    name: survey.name,
    categoryId : survey.categoryId,
    options: []
  }
  survey.options.map(opt => {
    result.options.push(opt.option);
  })
  console.log(result);
   return this.http.post<SurveyInputModel>("https://localhost:44360/api/surveys", result);
  }
}
