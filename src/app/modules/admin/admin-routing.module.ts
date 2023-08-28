import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {GetUserComponent} from "./get-user/get-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MainComponent} from "./main/main.component";
import {AppeloComponent} from "./appelo/appelo.component";

const routes: Routes = [ {
  path: '',
  component: MainComponent,
  children: [
    { path: 'user', component: GetUserComponent },
    { path: 'update/:id', component: EditUserComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'appel', component: AppeloComponent },

    { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
