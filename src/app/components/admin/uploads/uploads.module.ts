import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadsComponent } from './uploads.component';




@NgModule({
  declarations: [UploadsComponent],
  imports: [
    CommonModule,
    UploadsRoutingModule,
    MaterialModule
  ]
})
export class UploadsModule { }
