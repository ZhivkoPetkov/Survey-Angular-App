import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component'

const routes: Routes = [
  {
    path: "category/add",
    component: AddCategoryComponent,
  },
  {
    path: "survey/add",
    component: AddSurveyComponent,
  },
  {
    path: "",
    component:  PieChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
