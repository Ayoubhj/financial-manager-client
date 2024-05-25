import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import { LayoutComponent } from './layout/layout.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../authentication/authentication.guard";
import {UserService} from "../services/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

  ],

})
export class MainModule { }
