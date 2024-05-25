import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";



// routing
const routes: Routes = [
  {
    path: 'miscellaneous/not-found',
    component: NotFoundComponent,
    data: { animation: 'misc' }
  },
  {
    path: 'miscellaneous/not-authorized',
    component: NotAuthorizedComponent,
    data: { animation: 'misc' }
  }
];

@NgModule({
  declarations: [NotFoundComponent,NotAuthorizedComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ]
})
export class MiscellaneousModule {}
