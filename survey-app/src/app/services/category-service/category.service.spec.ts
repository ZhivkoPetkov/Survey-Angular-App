import { TestBed } from '@angular/core/testing';

import { CategoryserviceService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});