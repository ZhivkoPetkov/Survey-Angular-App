import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router : Router) { }

  categoryForm: FormGroup

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl(
        '',
        [Validators.required,
        Validators.minLength(6)])
      ,
      description: new FormControl(
        '',
        [Validators.required,
        Validators.minLength(12)])
    }
    )
  }

  get name() {
    return this.categoryForm.get('name');
  }

  get description() {
    return this.categoryForm.get('description');
  }

  save() {
    this.categoryService.postCategory(this.categoryForm.value).subscribe(
      (res) => {
        let id = res['id'];
        this.router.navigate([""])
      },
      (error) => { console.log(`error: ${error}`) }
    );
  }
}
