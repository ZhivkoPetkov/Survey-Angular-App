import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  categoryForm: FormGroup

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name : new FormControl(
        '', 
        [Validators.required, 
        Validators.minLength(6)])
      }
    )
  }

  get name()
    {
      return this.categoryForm.get('name');
    }

  save(){
    console.log(this.categoryForm);
  }
}
