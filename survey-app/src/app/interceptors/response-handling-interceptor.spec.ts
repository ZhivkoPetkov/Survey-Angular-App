import { TestBed } from '@angular/core/testing';

import { ResponseHandlingInterceptor} from './response-handling-interceptor';

describe('ResponseHandlingInterceptorService', () => {
  let service: ResponseHandlingInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseHandlingInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
