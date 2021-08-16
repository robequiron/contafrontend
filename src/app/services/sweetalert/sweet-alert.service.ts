import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { SweetAlertResult } from 'sweetalert2/*/sweetalert2.all.js';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }


/**
   * Show message error
   * 
   * @param title Message title
   * @param text Message text
   */
 public get_error(title:string,text:string,timer?:number):void {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: 'Cancelar', 
    
    timer: timer || 1500,
  })
  
}

/**
 * show message success
 * 
 * @param title Message title
 * @param text Message text
 * @param timer Message time
 */
public get_success (title:string,text:string,timer?:number):void {
  Swal.fire({
    title: title,
    allowOutsideClick:false,
    icon: 'success',
    timer: timer || 1500,
    text: text,
  })
}

/**
 * Message question
 * 
 * 
 * @param title Message title
 * @param text Message text
 * @return SweetAlertResult 
 */
public get_question(title:string,text:string,confirmText?:string,cancelText?:string):Promise<SweetAlertResult> {
  return Swal.fire({
    icon: 'question',
    title: title,
    text: text,
    showConfirmButton:true,
    showCancelButton: true,
    confirmButtonText: confirmText || 'OK',
    cancelButtonText: cancelText || 'Cancel',

  })
}
/**
 * Message warning
 * 
 * Mensaje de advertencia
 */
public get_warning(title:string, text:string,timer?:number):void {
  Swal.fire({
    title: title,
    allowOutsideClick:false,
    icon: 'warning',
    timer: timer || 1500,
    text: text,
  })
}


/**
 * Loadgin
 * 
 * Cargando...
 */
public get_load(text:string):void {
  
  text = text || '';    

  Swal.fire({
    showConfirmButton:false,
    showCancelButton: false,
    allowOutsideClick: false,
    html:
    '<i class="fas fa-3x fa-spinner fa-spin mb-2"></i>' +
    '<p class="text-info">Cargando '+  text  +'Espere por favor...  </p>' 
  })
}


public get_select(options:any){



  return Swal.fire({
    title:'Seleccione el usuario',
    input:'select',
    inputOptions: options ,
    inputPlaceholder: 'Usuarios',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        resolve('')
      })
    }


  })
}




}
