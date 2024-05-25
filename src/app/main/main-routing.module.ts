import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../authentication/authentication.guard";
import {LayoutComponent} from "./layout/layout.component";
import {Role} from "../enums/role";



const routes: Routes = [
  {
    path : "",
    component : LayoutComponent,
    children : [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      { path : "dashboard", component : DashboardComponent ,
        canActivate : [AuthGuard]  ,
        data : {
          roles: [Role.User]
        }
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
