import { TestBed } from '@angular/core/testing';

import { SubgruposService } from './subgrupos.service';

describe('SubgruposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubgruposService = TestBed.get(SubgruposService);
    expect(service).toBeTruthy();
  });
});
