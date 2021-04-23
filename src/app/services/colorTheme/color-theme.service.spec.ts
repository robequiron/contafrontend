import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ColorThemeService } from './color-theme.service';

describe('ColorThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ColorThemeService = TestBed.get(ColorThemeService);
    expect(service).toBeTruthy();
  });
});
