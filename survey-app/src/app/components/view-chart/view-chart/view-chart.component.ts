import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IOption } from 'src/app/interfaces/IOption';
import { ISurvey } from 'src/app/interfaces/ISurvey';
import { SurveyService } from 'src/app/services/survey-service/survey.service';
import { PieChartComponent } from '../../pie-chart/pie-chart.component';

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {
  @ViewChild(PieChartComponent) chart: PieChartComponent;

  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService) {
  }
  survey: ISurvey;
  votes: number[];
  labels: string[];
  isVoted: boolean;
  votedFor: string;

  ngOnInit(): void {
    this.survey = this.route.snapshot.data['survey'];
    this.votes = this.survey.options.map(x => x.votes);
    this.labels = this.survey.options.map(x => x.name);
    this.isVoted = false;
    this.survey.name = this.survey.name.endsWith('?') ? this.survey.name : this.survey.name+'?'
  }

  voteFor(index) {
    this.votes[index]++
    this.votedFor = this.labels[index];
    this.isVoted = true;
    this.chart.updateSeries(this.votes);
    this.surveyService.postVoteForSurvey(this.survey.id, this.survey.options[index].id).subscribe(x => {
      console.log(`Your vote is for ${this.votedFor}`)
    })
  }

  deleteSurvey() {
    this.surveyService.deleteSurvey(this.survey.id).subscribe(survey => {
      console.log(survey);
    })
  }

}

