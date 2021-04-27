import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { nextTick } from 'process';
import {Observable, from, of} from 'rxjs';
import { throwError } from 'rxjs';


import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/services.index';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let sortService:UsuarioService;
  let routerSpy;
  

  beforeEach(async(() => {
    routerSpy = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule,HttpClientTestingModule,RouterTestingModule],
      providers: [UsuarioService,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
    sortService = TestBed.get(UsuarioService);
    //router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('Crear componentes del login', () => {
    expect(component).toBeTruthy();
  });

  it('La variable localStorage tiene un email', () =>{
    localStorage.setItem('email','robequiron@gmail.com');
    component.ngOnInit();

    expect(component.recuerdame).toBeTruthy();


  })
  it('La variable localStorage no tiene un email', () =>{
    localStorage.setItem('email','');
    component.ngOnInit();
    expect(component.recuerdame).toBeFalsy();


  })



  it('El formulario email es invalido',()=>{
    const  form=<NgForm> {
      invalid:true
    }

    const v = component.login(form);
    expect(v).toBe(undefined)

  })

  it ("Es llamada la función login del servicio Usuario",()=>{
    
    const  form=<NgForm> {
      value: {
        name: 'email@gmail.com',
        password:'1234'
      }
    }

    const obs$ = new Observable<boolean>(resp=>{resp.next(true)})

    const user = new Usuario(null,form.value.name,form.value.password)
    
    const espia = spyOn(sortService, 'login').and.callFake(()=>{return new Observable<any>()})

    component.login(form)

    expect(espia).toHaveBeenCalled()
    
  })

  it ("El usuario está autetificado",()=>{
    
    const  form=<NgForm> {
      value: {
        name: 'email@gmail.com',
        password:'1234'
      }
    }

    const obs$ = of(true);
    const user = new Usuario(null,form.value.name,form.value.password)
    
    const espia = spyOn(sortService, 'login').and.returnValue(obs$)
    
    

    component.login(form)
    expect(espia).toBeTruthy()
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']); 
    
  
    
  })

  it ("El usuario no está autetificado",(done)=>{
    
    const  form=<NgForm> {
      value: {
        name: 'email@gmail.com',
        password:'1234'
      }
    }

    const obs$ = throwError( new Error('e'))
    const user = new Usuario(null,form.value.name,form.value.password)
    
    const espia = spyOn(sortService, 'login').and.returnValue(obs$)
    
    

    component.login(form)
    

    obs$.subscribe(
      ()=>{},
      ()=>{
        expect().nothing();
        setTimeout(function() {
          expect(component.error).toBe(false)
          done();
        }, 2000);
      }
    )
    
  })
});
