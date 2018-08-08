import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppConfig } from './app.config';
import { AppRoutingModule } from './routing'

import { LoginService } from './service/login.service';
import { HttpContextService } from './rest/http-context.service';
import { AreaService } from './service/area.service';

import { LoginComponent } from './account/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertificationComponent } from './certification/certification.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CertificationComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AppConfig,
    HttpContextService,
    LoginService, AreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
