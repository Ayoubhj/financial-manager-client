import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import { LayoutComponent } from './layout/layout.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

  ],

})
export class MainModule { }
