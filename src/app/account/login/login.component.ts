import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service'
import { Http } from '../../../../node_modules/@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginService: LoginService;
  router: Router;

  login: string;
  password: string;
  loginMessage: string;

  constructor(_loginService:LoginService, _router: Router) {
    this.loginService = _loginService;
    this.router = _router;
   }

  ngAfterViewInit(){
    if(this.loginService.isAccessState()){
      this.onLogout();
    }
  }

  ngOnInit() {

  }

  onLogin(){
    this.loginMessage = '';
    if(this.login !== '' && this.password !== '') {
      this.loginService.login(this.login, this.password);
      this.router.navigate(['./dashboard']);
    } else {
      this.loginMessage ='Podaj login i hasło';
    }
  }

  onLogout(){
    this.loginService.logout();
  }
  
}
