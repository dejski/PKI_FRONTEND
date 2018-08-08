import { Injectable } from '@angular/core';
import { HttpContextService } from './../rest/http-context.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpRestContect: HttpContextService;

  constructor(_httpRestContext: HttpContextService) {
    this.httpRestContect = _httpRestContext;
   }

  isAccessState(): boolean {
    var result =  localStorage.getItem('accessState');
    if(result === 'true')
      return true;
    else
      return false;
  }

  login(login, password):boolean{

    var credencial = {
      username: login,
      password: password
    };

    this.httpRestContect.post('api/account/login', credencial, (res)=>{
      console.log(res);
      localStorage.setItem('token', res.Data.token);
    });

    localStorage.setItem('accessState', 'true');
    return this.isAccessState();
  } 

  logout():boolean{
    localStorage.setItem('accessState', 'false');
    return this.isAccessState();
  } 

}
