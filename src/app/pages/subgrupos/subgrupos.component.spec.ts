import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RoundceilPipe } from 'src/app/pipes/roundceil.pipe';
import { LoadTableComponent } from '../tables/load-table.component';
import { NotfoundComponent } from '../tables/notfound.component';

import { SubgruposComponent } from './subgrupos.component';

describe('SubgruposComponent', () => {
  let component: SubgruposComponent;
  let fixture: ComponentFixture<SubgruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgruposComponent,LoadTableComponent,NotfoundComponent ],
      imports: [RouterTestingModule,FormsModule,NgxPaginationModule,PipesModule,HttpClientTestingModule],
      providers:[RoundceilPipe,PaginatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
