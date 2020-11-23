import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { EditSurveyComponent } from './components/edit-survey/edit-survey/edit-survey.component';
import { ListSurveysComponent } from './components/list-surveys/list-surveys/list-surveys.component';
import { ViewChartComponent } from './components/view-chart/view-chart/view-chart.component';
import { ViewSurveyResolver } from './resolvers/view-survey.resolver';

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
    path: "survey/:id",
    component: ViewChartComponent,
    resolve: {survey : ViewSurveyResolver}
  },
  {
    path: "survey/:id/edit",
    component: EditSurveyComponent,
    resolve: {survey : ViewSurveyResolver}
  },
  {
  path: ":category",
  component: ListSurveysComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
