import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bachiller',
  templateUrl: './bachiller.component.html',
  styleUrls: ['./bachiller.component.scss']
})
export class BachillerComponent implements OnInit {
  public opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
