import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcuentaComponent } from './subcuenta.component';

describe('SubcuentaComponent', () => {
  let component: SubcuentaComponent;
  let fixture: ComponentFixture<SubcuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcuentaComponent ]
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
