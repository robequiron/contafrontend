import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundceilPipe } from './roundceil.pipe';
import { CuentaPipe } from './cuenta.pipe';

@NgModule({
  declarations: [
  RoundceilPipe,
  CuentaPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundceilPipe,
    CuentaPipe

  ]
})
export class PipesModule { }
