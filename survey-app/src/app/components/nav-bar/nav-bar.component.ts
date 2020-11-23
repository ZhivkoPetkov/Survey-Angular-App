import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories: any[]

  constructor(private categorySerivce: CategoryService) { }

  ngOnInit(): void {
    this.categorySerivce.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

}
