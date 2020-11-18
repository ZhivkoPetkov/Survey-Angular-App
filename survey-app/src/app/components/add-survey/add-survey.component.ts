import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  surveyForm : FormGroup;

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      name : new FormControl('', 
      [
        Validators.required,
        Validators.minLength(6)
      ]),
      category : new FormControl('', 
      [
        Validators.required
      ]),
      options : this.formBuilder.array(
        [this.formBuilder.group({option : new FormControl(
        '', [Validators.required])}), 
        this.formBuilder.group({option : new FormControl(
        '', [Validators.required])})]),
    })}

    get options(){
      return this.surveyForm.get('options') as FormArray;
    }

    get categories(){
      return ["Sport", "News"];
    }

    get name()
    {
      return this.surveyForm.get('name');
    }

    addOption() {
      this.options.push(this.formBuilder.group({option : new FormControl(
        '', [Validators.required])}))
    }

    save()
    {
      console.log(this.surveyForm.value);
    }

    removeOption(index: number){
      console.log(index)
      this.options.removeAt(index);
    }

}
