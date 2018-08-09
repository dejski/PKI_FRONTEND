import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { UzytkownikAD } from './../KomponentyUB/models/uzytkownikAD'

@Injectable({
  providedIn: 'root',
})
export class PkiSvcAdregistryService {
  private apiUrl = 'http://172.16.2.199:8082/pki-svc-adregistry/v2/user/'
  constructor(private http: Http) {}

  getUser(nazwa): Observable<UzytkownikAD> {
    console.log(nazwa)
    return this.http.get(this.apiUrl + nazwa).pipe(map(res => res.json()))
  }
}
