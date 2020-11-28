import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SurveyViewModel } from 'src/app/interfaces/SurveyViewModel';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-list-surveys',
  templateUrl: './list-surveys.component.html',
  styleUrls: ['./list-surveys.component.css']
})
export class ListSurveysComponent implements OnInit {
  surveys$: Observable<SurveyViewModel[]>
  category: string
  description: string
  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private categorySerivce: CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.surveys$ = this.surveyService.getSurveysByCategory(this.category)
      this.categorySerivce.getCategoryDescriptionByName(this.category).subscribe(data =>{
        this.description = data['description'];
      });
    })
  }
}
