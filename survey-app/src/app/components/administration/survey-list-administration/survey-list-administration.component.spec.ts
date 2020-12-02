import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListAdministrationComponent } from './survey-list-administration.component';

describe('SurveyListAdministrationComponent', () => {
  let component: SurveyListAdministrationComponent;
  let fixture: ComponentFixture<SurveyListAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyListAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
