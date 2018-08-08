import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { LoginComponent } from './account/login/login.component'
import { AppComponent } from './app.component'
import { AppConfig } from './app.config'
import { CertificationComponent } from './certification/certification.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { MenuComponent } from './menu/menu.component'
import { HttpContextService } from './rest/http-context.service'
import { AppRoutingModule } from './routing'
import { AreaService } from './service/area.service'
import { LoginService } from './service/login.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CertificationComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [AppConfig, HttpContextService, LoginService, AreaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
