import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISurvey } from 'src/app/interfaces/ISurvey';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { 
  }
  survey: ISurvey;

  ngOnInit(): void {
      this.survey = this.route.snapshot.data['survey'];
    }
  }
