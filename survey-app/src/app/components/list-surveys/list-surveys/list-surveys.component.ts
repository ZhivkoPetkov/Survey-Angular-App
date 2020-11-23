import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SurveyViewModel } from 'src/app/interfaces/SurveyViewModel';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-list-surveys',
  templateUrl: './list-surveys.component.html',
  styleUrls: ['./list-surveys.component.css']
})
export class ListSurveysComponent implements OnInit {
  surveys: SurveyViewModel[]
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit(): void {
    let category = '';
    this.route.params.subscribe((params: Params) => {
      category = params['category']
      this.surveyService.getSurveysByCategory(category).subscribe(data => {
        this.surveys = data;
      })
    });
  }
}
