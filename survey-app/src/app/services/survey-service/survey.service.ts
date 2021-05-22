import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ISurvey } from 'src/app/interfaces/ISurvey';
import { SurveyInputModel } from 'src/app/interfaces/SurveyInputModel';
import { SurveyListViewModel } from 'src/app/interfaces/SurveyListViewModel';
import { SurveyUpdateModel } from 'src/app/interfaces/SurveyUpdateModel';
import { SurveyViewModel } from 'src/app/interfaces/SurveyViewModel';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http: HttpClient) { }

  private API : string = 'https://surveysapi.azurewebsites.net/api/';

  public getSurvey(id: number) {
    var survey = this.http.get<ISurvey>(`${this.API}/surveys/${id}`);
    return survey;
  }

  public getAllSurveys() {
    return this.http.get<SurveyListViewModel[]>(`${this.API}/surveys/all`);
  }

  public postSurvey(survey): Observable<SurveyInputModel> {
    let result = {
      name: survey.name,
      categoryId: survey.categoryId,
      options: []
    }
    survey.options.map(opt => {
      result.options.push(opt.option);
    })
    
    return this.http.post<SurveyInputModel>(`${this.API}/surveys`, result);
  }

  public postVoteForSurvey(surveyId, optionId) {
    this.setInStorage(surveyId);
    let votingInfo = [surveyId, optionId];
    return this.http.post<number[]>(`${this.API}/surveys/voting`, votingInfo);
  }

  private setInStorage(surveyId){
    localStorage.setItem(surveyId,surveyId);
  }

  public alreadyVoted(surveyId){
    return localStorage.getItem(surveyId) !== null;
  }

  public deleteSurvey(id) {
    console.log(id)
    return this.http.delete(`${this.API}/surveys/${id}`)
  }

  public deleteOptionFromSurvey(surveyId, optionId){
      let votingInfo = [surveyId, optionId];
      return this.http.post<number[]>(`${this.API}/surveys/delete-option`, votingInfo);
    }
    
  public updateSurvey(survey: ISurvey){
    return this.http.post<ISurvey>(`${this.API}/surveys/update`, survey);
  }

  public getSurveysByCategory(categoryName: string){
    return this.http.get<SurveyViewModel[]>(`${this.API}/surveys/category/${categoryName}`);
  }

  
  public getLastSurveysFromCategories() : Observable<SurveyViewModel[]>{
    return this.http.get<SurveyViewModel[]>(`${this.API}/surveys/last`);
  }
}
