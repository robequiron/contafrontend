import { Pipe, PipeTransform } from '@angular/core';
/**
 * Round a number up
 */
@Pipe({
  name: 'roundceil'
})
export class RoundceilPipe implements PipeTransform {

  transform(value: any, args: number): any {

    if (args>0) {
      return  Math.ceil(args/value);
    } else {
      return null;
    }


    
  }

}
