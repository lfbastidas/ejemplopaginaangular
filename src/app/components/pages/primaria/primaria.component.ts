import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primaria',
  templateUrl: './primaria.component.html',
  styleUrls: ['./primaria.component.scss']
})
export class PrimariaComponent implements OnInit {
  public opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
