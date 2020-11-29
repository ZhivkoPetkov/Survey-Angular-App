import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { CategoryListAdministrationComponent } from './components/administration/category-list-administration/category-list-administration/category-list-administration.component';
import { EditCategoryComponent } from './components/edit-category/edit-category/edit-category.component';
import { EditSurveyComponent } from './components/edit-survey/edit-survey/edit-survey.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListSurveysComponent } from './components/list-surveys/list-surveys/list-surveys.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewChartComponent } from './components/view-chart/view-chart/view-chart.component';
import { ViewCategoryResolver } from './resolvers/view-category/view-category.resolver';
import { ViewSurveyResolver } from './resolvers/view-survey.resolver';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
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
    resolve: { survey: ViewSurveyResolver }
  },
  {
    path: "survey/:id/edit",
    component: EditSurveyComponent,
    resolve: { survey: ViewSurveyResolver }
  },
  {
    path: ":category",
    component: ListSurveysComponent,
  },
  {
    path: "category/:id/edit",
    component: EditCategoryComponent,
    resolve: { category: ViewCategoryResolver }
  },
  {
    path: "admin/categories",
    component: CategoryListAdministrationComponent,
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "auth/register",
    component: RegisterComponent,
  }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
