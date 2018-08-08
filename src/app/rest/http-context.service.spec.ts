import { TestBed, inject } from '@angular/core/testing';

import { HttpContextService } from './http-context.service';

describe('HttpContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpContextService]
    });
  });

  it('should be created', inject([HttpContextService], (service: HttpContextService) => {
    expect(service).toBeTruthy();
  }));
});
