import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { CuentaPipe } from 'src/app/pipes/cuenta.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RoundceilPipe } from 'src/app/pipes/roundceil.pipe';
import { LoadTableComponent } from '../tables/load-table.component';
import { NotfoundComponent } from '../tables/notfound.component';

import { CuentasComponent } from './cuentas.component';

describe('CuentasComponent', () => {
  let component: CuentasComponent;
  let fixture: ComponentFixture<CuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasComponent, LoadTableComponent,NotfoundComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule,NgxPaginationModule,FormsModule,PipesModule],
      providers:[RoundceilPipe,PaginatePipe,CuentaPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
