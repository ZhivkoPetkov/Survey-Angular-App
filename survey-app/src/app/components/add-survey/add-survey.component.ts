import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private surveyService: SurveyService,
    private categorySerivce: CategoryService, private router: Router) { }

  surveyForm: FormGroup;
  categoriesList: ICategory[];

  ngOnInit(): void {
    this.categorySerivce.getCategories().subscribe(cats => {
      this.categoriesList = cats;
    });
    this.surveyForm = this.formBuilder.group({
      name: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6)
        ]),
      categoryId: new FormControl('',
        [
          Validators.required
        ]),
      options: this.formBuilder.array(
        [this.formBuilder.group({
          option: new FormControl(
            '', [Validators.required])
        }),
        this.formBuilder.group({
          option: new FormControl(
            '', [Validators.required])
        })]),
    })
  }

  get options() {
    return this.surveyForm.get('options') as FormArray;
  }

  get categories() {
    return this.categoriesList
  }

  get name() {
    return this.surveyForm.get('name');
  }

  addOption() {
    this.options.push(this.formBuilder.group({
      option: new FormControl(
        '', [Validators.required])
    }))
  }

  save() {
    this.surveyService.postSurvey(this.surveyForm.value).
      subscribe(
        (res) => {
          let id = res['id'];
          this.router.navigate(["survey",id])
        },
        (error) => { console.log(`error: ${error}`) }
      );


  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

}
