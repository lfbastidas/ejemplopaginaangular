import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
public opened = false;
  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }
  onLogout(): void {
    this.authSvc.logout();
 }

 private date = new Date(); 
}
