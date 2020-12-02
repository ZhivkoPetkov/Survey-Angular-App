import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { EditCategoryComponent } from './components/edit-category/edit-category/edit-category.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { ResponseHandlingInterceptor } from './interceptors/response-handling-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LandingComponent } from './components/landing/landing.component';
import { SurveyListAdministrationComponent } from './components/administration/survey-list-administration/survey-list-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    PieChartComponent,
    AddSurveyComponent,
    NavBarComponent,
    ViewChartComponent,
    EditSurveyComponent,
    ListSurveysComponent,
    CategoryListAdministrationComponent,
    EditCategoryComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    SurveyListAdministrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseHandlingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
