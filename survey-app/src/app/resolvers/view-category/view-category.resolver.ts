import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category-service/category.service';


@Injectable({ providedIn: 'root' })
export class ViewCategoryResolver implements Resolve<ICategory> {

  constructor(private categoryService: CategoryService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.categoryService.getCategory(route.params['id']);
  }
}