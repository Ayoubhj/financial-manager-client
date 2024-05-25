import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from "../services/user.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard {

  current: any

  constructor(private _router: Router,private _authService: UserService) {}
  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (localStorage.getItem('user')) {

      this.current = JSON.parse(`${atob(localStorage.getItem("user") || "{}")}`)

    }
    if (this.current) {
      console.log(this.current)
      // check if route is restricted by role
      if (route.data["roles"] && route.data["roles"].indexOf(this.current.role) === -1) {
        // role not authorised so redirect to not-authorized page
        this._router.navigate(['/error/miscellaneous/not-authorized']);
        return false;
      }

      // authorised so return true
      return true;
    }

    this._router.navigate(['/auth/login']);
    return false;
  }
}
