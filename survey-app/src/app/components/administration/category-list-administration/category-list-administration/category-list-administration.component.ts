import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category-list-administration',
  templateUrl: './category-list-administration.component.html',
  styleUrls: ['./category-list-administration.component.css']
})
export class CategoryListAdministrationComponent implements OnInit {
  categories: ICategory[]
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(cats => {
      console.log(cats);
      this.categories = cats;
    });
    console.log(this.categories);
  }

  edit(id) {
    //TODO
  }

  delete(id) {
    this.categories = this.categories.filter(x => x.id != id);
    this.categoryService.deleteCategory(id).subscribe(() => { })
  }
}
