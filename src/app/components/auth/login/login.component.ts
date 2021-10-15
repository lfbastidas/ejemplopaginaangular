import { UserI } from './../../../shared/models/user.interface';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private route: Router) {}


  hide = true;
  
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });
  
  ngOnInit(){
    
  }

  onLogin(form: UserI) {
    this.authSvc
    .loginByEmail(form)
    .then(res => {
      console.log('succesfully signed', res);
      this.route.navigate(['/admin']);
    }) 
    .catch(err => console.log('Error', err));
  }
}
