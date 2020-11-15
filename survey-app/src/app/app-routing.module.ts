import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';

const routes: Routes = [
  {
    path: "category/add",
    component: AddCategoryComponent,
  },
  {
    path: "survey/add",
    component: AddSurveyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
