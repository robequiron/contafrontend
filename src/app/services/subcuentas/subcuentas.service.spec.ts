import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


import { SubcuentasService } from './subcuentas.service';

describe('SubcuentasService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  
    
  }));

  afterEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: SubcuentasService = TestBed.get(SubcuentasService);
    expect(service).toBeTruthy();
  });
});
