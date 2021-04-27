import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaxesService } from 'src/app/services/services.index';
import { By } from '@angular/platform-browser/';
import { TaxComponent } from './tax.component';
import { TaxformComponent } from './taxform.component';
import { TaxporformComponent } from './taxporform.component';
import { from } from 'rxjs';

describe('TaxComponent', () => {
  let component: TaxComponent;
  let fixture: ComponentFixture<TaxComponent>;
  let taxService: TaxesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxComponent, TaxformComponent,TaxporformComponent ],
      imports:[FormsModule,HttpClientTestingModule]
    })
    .compileComponents();
    taxService = TestBed.get(TaxesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  

  it('Creado component tax', () => {
    expect(component).toBeTruthy();
  });

  it('Título de la consulta de tax', ()=>{
    

    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query( By.css('.block-title:nth-child(1) h2')).nativeElement;

    expect(elem.innerHTML.length).toBeGreaterThan(4);

  })

  it('Título de la consulta porcentaje tax', ()=>{
    

    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query( By.css('.row:nth-child(1) .col-md-6:nth-child(2) .block-title h2')).nativeElement;
    
    
    expect(elem.innerHTML.length).toBeGreaterThan(4);

  })
});
