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

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryListComponent,
    PieChartComponent,
    AddSurveyComponent,
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
