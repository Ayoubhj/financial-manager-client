import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationGuardLoggedIn} from "./authentication.guard.loggedIn";

const routes: Routes = [

  {
    path: 'login',
    component : LoginComponent,
    canActivate : [AuthenticationGuardLoggedIn]
  },
  {
    path: 'register',
    component : RegisterComponent,
    canActivate : [AuthenticationGuardLoggedIn]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
