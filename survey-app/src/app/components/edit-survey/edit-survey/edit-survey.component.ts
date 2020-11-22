import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Option } from 'src/app/classes/Option';
import { ISurvey } from 'src/app/interfaces/ISurvey';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private surveyService: SurveyService) {

  }
  survey: ISurvey;
  form: FormGroup;

  ngOnInit(): void {
    this.survey = this.route.snapshot.data['survey'];
    this.form = this.formBuilder.group({
      name: new FormControl(this.survey.name,
        [
          Validators.required,
          Validators.minLength(6),
        ]),
      categoryId: new FormControl('',
        [
          Validators.required
        ]),
        options : this.formBuilder.array([]),
        optionVotes : this.formBuilder.array([]),

      })

      this.fillOptionNames();
      this.fillOptionVotes();
  }

  private fillOptionNames() {
    this.survey.options.forEach(opt => {
      this.options.push( this.formBuilder.group({option : new FormControl(
        opt.name, [Validators.required])}))
    })
  }

  private fillOptionVotes() {
    this.survey.options.forEach(opt => {
      this.optionVotes.push( this.formBuilder.group({optionVote : new FormControl(
        opt.votes, [Validators.required])}));
    })}


  get options(){
    return this.form.get('options') as FormArray;
  }

  get optionVotes(){
    return this.form.get('optionVotes') as FormArray;
  }

  removeOption(index: number){
    this.options.removeAt(index);
    this.optionVotes.removeAt(index);
    this.surveyService.deleteOptionFromSurvey(this.survey.id, this.survey.options[index].id).subscribe(x => {
      console.log(`Option deleted from ${this.survey.name}`)
    })
  }

  addOption(){
    this.options.push(this.formBuilder.group({option : new FormControl(
      '', [Validators.required])}));
    this.optionVotes.push(this.formBuilder.group({optionVote : new FormControl(
      0, [Validators.required])}))
      
      let option = new Option ();
      option.name = '';
      option.votes = 0;
      this.survey.options.push(option);
  }

  save(){
    this.updateSurveyProperties()
    this.surveyService.updateSurvey(this.survey).subscribe(x => {
      console.log('success change')
    });
  }

  updateSurveyProperties(){
    this.survey.name = this.form.value.name;

    this.survey.options.forEach((option, index) => {
      option.name = this.form.value.options[index].option;
      option.votes = this.form.value.optionVotes[index].optionVote;
    })
    console.log(JSON.stringify(this.survey))
  }

}

