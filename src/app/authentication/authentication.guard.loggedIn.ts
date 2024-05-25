import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from "../services/user.service";

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardLoggedIn {

  current: any

  constructor(private _router: Router,private _authService: UserService) {}
  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('user')) {

      this.current = JSON.parse(`${atob(localStorage.getItem("user") || "{}")}`)

    }
    if (this.current) {

      this._router.navigate(['/main/dashboard']);
      return false;

    }

    return true;

  }
}
