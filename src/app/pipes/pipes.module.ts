import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundceilPipe } from './roundceil.pipe';

@NgModule({
  declarations: [
  RoundceilPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundceilPipe
  ]
})
export class PipesModule { }
