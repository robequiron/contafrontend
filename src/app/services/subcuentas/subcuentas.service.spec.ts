import { TestBed } from '@angular/core/testing';

import { SubcuentasService } from './subcuentas.service';

describe('SubcuentasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcuentasService = TestBed.get(SubcuentasService);
    expect(service).toBeTruthy();
  });
});
