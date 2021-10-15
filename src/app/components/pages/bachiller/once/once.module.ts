import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnceRoutingModule } from './once-routing.module';
import { OnceComponent } from './once.component';


@NgModule({
  declarations: [OnceComponent],
  imports: [
    CommonModule,
    OnceRoutingModule,
    MaterialModule
  ]
})
export class OnceModule { }
