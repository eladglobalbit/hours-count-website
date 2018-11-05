import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoursPageComponent } from './hours-page/hours-page.component';
import {HttpModule} from '@angular/http';

import {httpInterceptors} from './http-interceptors/index';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HoursPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [httpInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
