import { Component, OnInit } from '@angular/core';
import { ISurvey } from './interfaces/ISurvey';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}
  ngOnInit(): void {}
}