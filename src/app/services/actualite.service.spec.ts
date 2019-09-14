import { TestBed } from '@angular/core/testing';

import { ActualiteService } from './actualite.service';

describe('ActualiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualiteService = TestBed.get(ActualiteService);
    expect(service).toBeTruthy();
  });
});
