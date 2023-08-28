import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {} from  '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AdminModule} from "./modules/admin/admin.module";
import {httpInterceptorProviders} from "./interceptor/intex";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,


  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
