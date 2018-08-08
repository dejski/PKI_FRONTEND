import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root',
})
export class HttpContextService {

  endpoint: string = 'https://iisdev1.poland.asseco.corp/rap2/dev/api/';
  constructor(private http: Http) {
  }

  public get(url: string, callback) {
    const t = this;
    const options = this.getOptions();
    const urlMethod = this.endpoint + url;
    return this.http.get(urlMethod, options).subscribe(res => {
      callback(res.json());
    })
  }

  public post(url: string, body: any, callback) {
    const t = this;
    const options = this.getOptions();
    const urlMethod = this.endpoint + url;
    //console.log(urlMethod);
    //console.log(JSON.stringify(body));
    return this.http.post(urlMethod, JSON.stringify(body), options)
      .subscribe(
        res => {
          callback(res.json());
      }, error => {
        console.error(error);
      }
    );
  }

  private getOptions(): RequestOptions {
    const headers = new Headers();
    headers.append('token', localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

}
