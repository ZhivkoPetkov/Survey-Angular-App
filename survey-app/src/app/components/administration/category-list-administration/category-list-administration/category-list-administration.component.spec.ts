import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListAdministrationComponent } from './category-list-administration.component';

describe('CategoryListAdministrationComponent', () => {
  let component: CategoryListAdministrationComponent;
  let fixture: ComponentFixture<CategoryListAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
