import { Injectable } from '@angular/core';
import { HttpContextService } from './../rest/http-context.service';


@Injectable({
  providedIn: 'root'
})
export class AreaService {

  http: HttpContextService;

  constructor(_http: HttpContextService) {
    this.http = _http;
  }


  getAreas(callback):void{
    this.http.get('api/area/get', (res) => {callback(res)});
  }

}
