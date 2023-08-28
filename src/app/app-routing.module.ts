import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TestComponent} from "./test/test.component";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: TestComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
