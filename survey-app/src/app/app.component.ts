import { Component, OnInit } from '@angular/core';
import { ISurvey } from './interfaces/ISurvey';
import { CategoryserviceService } from './services/categoryservice.service';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private catetegoryservice : CategoryserviceService) {}
  title = 'survey-app';
  survey : any;

  ngOnInit(){
    interval(1000).pipe(
      switchMap(() =>  this.catetegoryservice.getSurvey(1)),
    ).subscribe(result => {
      this.survey = result;
    });
  }

  getOptionsTitles() : string[]{
    return this.survey.options.map(x=>x.name);
  }

  getOptionsVotes() : string[]{
    return this.survey.options.map(x=>x.votes);
  }
  }



