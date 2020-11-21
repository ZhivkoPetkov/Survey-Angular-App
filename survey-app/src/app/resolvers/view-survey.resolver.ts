import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISurvey } from '../interfaces/ISurvey';
import { SurveyService } from '../services/survey-service/survey.service';

@Injectable({ providedIn: 'root' })
export class ViewSurveyResolver implements Resolve<ISurvey> {

  constructor(private surveyService: SurveyService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.surveyService.getSurvey(route.params['id']);
  }
}