import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {TestComponent} from "./test/test.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {GetUserComponent} from "./get-user/get-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: TestComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'user', component: GetUserComponent },
  { path: 'update/:id', component: EditUserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
