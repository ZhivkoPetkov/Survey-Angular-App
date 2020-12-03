import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API : string = 'https://zhp-surveys.azurewebsites.net/api';

  constructor(private http : HttpClient) { }

  public getCategories() {
    return this.http.get<ICategory[]>(`${this.API}/categories`)
  }

  public deleteCategory(id: number) {
    return this.http.delete(`${this.API}/categories/${id}`)
  }

  public postCategory(category: string) {
    return this.http.post(`${this.API}/categories`, category);
  }

  public getCategory(id: number) {
    return this.http.get<ICategory>(`${this.API}/categories/${id}`);
  }

  public updateCategory(category: ICategory){
    return this.http.post<ICategory>(`${this.API}/categories/update`, category);
  }

  public getCategoryDescriptionByName(name: string){
    return this.http.get(`${this.API}/categories/description/${name}`)
  }

}
