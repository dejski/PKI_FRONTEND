import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { LoginComponent } from './account/login/login.component'
import { AppComponent } from './app.component'
import { AppConfig } from './app.config'
import { DashboardComponent } from './KomponentyUB/dashboard/dashboard.component'
import {
  UsersDetailsComponent,
} from './KomponentyUB/users-details/users-details.component'
import { UsersComponent } from './KomponentyUB/users/users.component'
import { MenuComponent } from './menu/menu.component'
import { HttpContextService } from './rest/http-context.service'
import { AppRoutingModule } from './routing'
import { AreaService } from './service/area.service'
import { LoginService } from './service/login.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MenuComponent,
    UsersComponent,
    UsersDetailsComponent,
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
