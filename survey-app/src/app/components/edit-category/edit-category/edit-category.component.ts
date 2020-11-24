import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  
  category : ICategory
  categoryForm: FormGroup

  constructor(private categoryService: CategoryService,private formBuilder: FormBuilder, 
                private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.data['category']

    this.categoryForm = this.formBuilder.group({
      name: new FormControl(
        this.category.name,
        [Validators.required,
        Validators.minLength(6)])
      ,
      description: new FormControl(
        this.category.description,
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

  save(){
   console.log(this.categoryForm.value);
    this.category.name = this.categoryForm.value.name;
    this.category.description = this.categoryForm.value.description;

    this.categoryService.updateCategory(this.category).subscribe(data =>{
      this.router.navigate(["admin/categories"]);
    })
      
  }

}
