import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


import { TaxesService } from './taxes.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TaxesService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,RouterTestingModule],
  
    
  }));

  afterEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: TaxesService = TestBed.get(TaxesService);
    expect(service).toBeTruthy();
  });
});
