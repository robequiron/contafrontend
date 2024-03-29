import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SubcuentaComponent } from './subcuenta.component';

describe('SubcuentaComponent', () => {
  let component: SubcuentaComponent;
  let fixture: ComponentFixture<SubcuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcuentaComponent ],
      imports: [FormsModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
