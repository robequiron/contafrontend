import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(this.handleError)
    );
    
  }


  /*================================================
  /	Handle error											   
  /================================================*/
  private handleError (error: HttpErrorResponse) {
     if (error.status==401) {
      Swal.fire({
        icon: 'warning',
        title: 'Error 401',
        text: 'Error de autentificación',
        showConfirmButton: false,
        timer: 2500
      })
     } 
     
    return throwError(error);
  }

}
