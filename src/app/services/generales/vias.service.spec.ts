import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


import { ViasService } from './vias.service';

describe('ViasService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  
    
  }));

  afterEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
  })
  it('should be created', () => {
    const service: ViasService = TestBed.get(ViasService);
    expect(service).toBeTruthy();
  });
});
