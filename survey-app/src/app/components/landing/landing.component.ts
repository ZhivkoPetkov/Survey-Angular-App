import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyViewModel } from 'src/app/interfaces/SurveyViewModel';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  surveys$ : Observable<SurveyViewModel[]>
  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveys$ = this.surveyService.getLastSurveysFromCategories();
  }

}
