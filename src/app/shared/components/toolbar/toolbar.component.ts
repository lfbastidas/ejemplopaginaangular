import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public appName = 'I.E. SAGRADA FAMILIA | CALOTO';
  constructor() { }

  ngOnInit(): void {
  }

}
