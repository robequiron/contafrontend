import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundceilPipe } from './roundceil.pipe';
import { CuentaPipe } from './cuenta.pipe';

@NgModule({
  declarations: [
  
  CuentaPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    
    CuentaPipe

  ]
})
export class PipesModule { }
