import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


import { CuentasService } from './cuentas.service';
import { CuentaPipe } from 'src/app/pipes/cuenta.pipe';

describe('CuentasService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CuentaPipe]
  
    
  }));

  afterEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: CuentasService = TestBed.get(CuentasService);
    expect(service).toBeTruthy();
  });
  


});
