import { Injectable } from '@angular/core';
import { ISurvey } from '../../interfaces/ISurvey';
import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http : HttpClient) { }

  public getCategories() {
    return this.http.get<ICategory[]>("https://localhost:44360/api/categories")
  }

  public deleteCategory(id: number) {
    return this.http.delete(`https://localhost:44360/api/categories/${id}`)
  }

  public postCategory(category: string) {
    return this.http.post("https://localhost:44360/api/categories", category);
  }

  public getCategory(id: number) {
    return this.http.get<ICategory>(`https://localhost:44360/api/categories/${id}`);
  }

  public updateCategory(category: ICategory){
    return this.http.post<ICategory>(`https://localhost:44360/api/categories/update`, category);
  }

  public getCategoryDescriptionByName(name: string){
    return this.http.get(`https://localhost:44360/api/categories/description/${name}`)
  }

}
