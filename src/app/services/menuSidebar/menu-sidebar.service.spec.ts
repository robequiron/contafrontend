import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { MenuSidebarService } from './menu-sidebar.service';

describe('MenuSidebarService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  
    
  }));

  afterEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
  })
  it('should be created', () => {
    const service: MenuSidebarService = TestBed.get(MenuSidebarService);
    expect(service).toBeTruthy();
  });
});
