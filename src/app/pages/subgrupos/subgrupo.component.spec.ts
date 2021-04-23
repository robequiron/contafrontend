import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SubgrupoComponent } from './subgrupo.component';

describe('SubgrupoComponent', () => {
  let component: SubgrupoComponent;
  let fixture: ComponentFixture<SubgrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgrupoComponent ],
      imports: [RouterTestingModule,FormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
