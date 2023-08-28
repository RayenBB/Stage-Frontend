import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import {FooterComponent} from "./footer/footer.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {GetUserComponent} from "./get-user/get-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserModule} from "@angular/platform-browser";
import {AppeloComponent} from "./appelo/appelo.component";


@NgModule({
    declarations: [
        MainComponent,
        FooterComponent,
        AcceuilComponent,
        GetUserComponent,
        EditUserComponent,
        DashboardComponent,
        AppeloComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class AdminModule { }
