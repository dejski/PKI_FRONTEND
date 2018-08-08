import { Component } from '@angular/core';

import { AppConfig } from './app.config';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appConfig: AppConfig;
  appState: LoginService;

  state: boolean

  dane_z_main: string = 'Witaj w komponencie menu';

  constructor(_app: AppConfig, _appState: LoginService){
    this.appConfig = _app;
    this.appState = _appState;
  }

  title = 'Weryfikacja pobrań certyfikatów PKI';

}
