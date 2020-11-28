import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category-list-administration',
  templateUrl: './category-list-administration.component.html',
  styleUrls: ['./category-list-administration.component.css']
})
export class CategoryListAdministrationComponent implements OnInit {
  categories$: Observable<ICategory[]>
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }

  delete(id) {
    this.categories$ = this.categories$.pipe(map(categories => categories.filter(x => x.id != id)));
    this.categoryService.deleteCategory(id).subscribe(() =>{
      console.log(`Category was deleted.`)
    });
  }
}