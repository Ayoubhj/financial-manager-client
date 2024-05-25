import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: '',component : HomePageComponent},
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'error', loadChildren: () => import('./miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule)},
  { path: '**', redirectTo: '/error/miscellaneous/not-found' /*Error 404 - Page not found*/ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
