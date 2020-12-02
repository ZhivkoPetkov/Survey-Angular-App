import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from 'src/app/interfaces/ICategory';
import { SurveyListViewModel } from 'src/app/interfaces/SurveyListViewModel';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-survey-list-administration',
  templateUrl: './survey-list-administration.component.html',
  styleUrls: ['./survey-list-administration.component.css']
})
export class SurveyListAdministrationComponent implements OnInit {

  surveys$: Observable<SurveyListViewModel[]>;
  filteredSurveys$ : Observable<SurveyListViewModel[]>;
  categoriesList$: Observable<ICategory[]>;
  checkedCategory : ''

  constructor(private surveyService: SurveyService, private categorySerivce: CategoryService) { }

  ngOnInit(): void {
    this.surveys$ = this.surveyService.getAllSurveys();
    this.filteredSurveys$ =  this.surveys$;
    this.categoriesList$ = this.categorySerivce.getCategories();
  }

  delete(id) {
    this.surveyService.deleteSurvey(id).subscribe(sub => {
      console.log('Survey was deleted.')
    });
    this.surveys$ = this.surveys$.pipe(map(surveys => surveys.filter(x => x.id != id)));
    this.filteredSurveys$ = this.surveys$.pipe(map(surveys => surveys.filter(x => x.id != id)));
  }

  filterBy(categoryName){
    this.checkedCategory = categoryName;
    this.filteredSurveys$ = this.surveys$.pipe(map(surveys => surveys.filter(cat => cat.category == categoryName)));
  }

}
