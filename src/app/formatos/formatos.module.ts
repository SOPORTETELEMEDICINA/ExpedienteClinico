import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatosRoutingModule } from './formatos-routing.module';
import { FormatosComponent } from './formatos.component';


@NgModule({
  declarations: [FormatosComponent],
  imports: [
    CommonModule,
    FormatosRoutingModule
  ]
})
export class FormatosModule { }
