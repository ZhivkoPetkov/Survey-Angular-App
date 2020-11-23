import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import {NgApexchartsModule} from 'ng-apexcharts';
import {PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewChartComponent } from './components/view-chart/view-chart/view-chart.component';
import { EditSurveyComponent } from './components/edit-survey/edit-survey/edit-survey.component';
import { ListSurveysComponent } from './components/list-surveys/list-surveys/list-surveys.component';
import { CategoryListAdministrationComponent } from './components/administration/category-list-administration/category-list-administration/category-list-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryListComponent,
    PieChartComponent,
    AddSurveyComponent,
    NavBarComponent,
    ViewChartComponent,
    EditSurveyComponent,
    ListSurveysComponent,
    CategoryListAdministrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
