import { Pipe, PipeTransform } from '@angular/core';

/**
 * Complete the account to 8 digits, and create minimum and maximum intervals
 * 
 * @example transform(400,[0]) => 400 00000
 * @example transform(400,[1]) => 400 99999
 * @returns number
 */
@Pipe({
  name: 'cuenta'
})
export class CuentaPipe implements PipeTransform {

  transform(value: number, args: any[]): any {

     let n = value.toString().length;
     let digitos0:String = ''; 
     let digitos9:String = '';
     for ( n; n< 8; n++) {
        digitos0 = digitos0 + "0";
        digitos9 = digitos9 + "9";
     }

     let cuenta: string;

     if(args[0]===0) {
       cuenta = value.toString() + digitos0;
       return Number(cuenta);
     }
     
     if (args[0]===1) {
      cuenta = value.toString() + digitos9;
      return Number(cuenta);
     }

  }

}
