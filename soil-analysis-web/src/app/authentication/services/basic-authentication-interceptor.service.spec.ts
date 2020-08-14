import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationInterceptorService } from './basic-authentication-interceptor.service';

describe('BasicAuthenticationInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthenticationInterceptorService = TestBed.get(BasicAuthenticationInterceptorService);
    expect(service).toBeTruthy();
  });
});
