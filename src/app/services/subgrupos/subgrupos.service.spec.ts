import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { SubgruposService } from './subgrupos.service';
import { FormsModule } from '@angular/forms';

describe('SubgruposService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,FormsModule],
  
    
  }));

  afterEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: SubgruposService = TestBed.get(SubgruposService);
    expect(service).toBeTruthy();
  });
});
