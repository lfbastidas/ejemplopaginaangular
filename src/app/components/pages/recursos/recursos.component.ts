import { MicrosoftSheetComponent } from './../../../shared/components/microsoft-sheet/microsoft-sheet.component';
import { MySheetComponent } from './../../../shared/components/my-sheet/my-sheet.component';
import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';




@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {
  panelOpenState = false;
  
  constructor(private _bottomSheet: MatBottomSheet) { }

  
  openBottomSheet(): void {
    this._bottomSheet.open(MySheetComponent);
  }

  openBottomMicrosoft(): void {
    this._bottomSheet.open(MicrosoftSheetComponent);
  }
  ngOnInit(): void {
  }

}



