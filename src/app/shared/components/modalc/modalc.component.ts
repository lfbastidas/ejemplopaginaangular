import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalc',
  templateUrl: './modalc.component.html',
  styleUrls: ['./modalc.component.scss']
})
export class ModalcComponent implements OnInit {
  constructor(public dialogc: MatDialogRef <ModalcComponent>,
    @Inject(MAT_DIALOG_DATA) public datac: any) { }

  ngOnInit(): void {
  }

}
