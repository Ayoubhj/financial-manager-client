import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    if(localStorage.getItem("user")){
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(`${atob(localStorage.getItem("user") || "{}")}`));
      this.currentUser = this.currentUserSubject.asObservable();
    } else{
      this.currentUserSubject = new BehaviorSubject<any>(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }


  public get userInfo(): any {
    return this.currentUserSubject.value;
  }

  public set (user:any): any {
    localStorage.setItem('user', btoa(JSON.stringify(user)));
    this.currentUserSubject.next(user);
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  public login(form: any) {

    return this.http.post(environment.url + 'auth/login', form, {
      responseType: "json",
    }).pipe(map((response:any) => {
      localStorage.setItem('accessToken', response.access_token);
      localStorage.setItem('user', btoa(JSON.stringify(response.user)));
      this.currentUserSubject.next(response.user);
      return response;
    }));

  }

  public register(form: any) {
    return this.http.post(environment.url + 'auth/register', form, { responseType: "json", })
      .pipe(map((response:any) => {
      localStorage.setItem('accessToken', response.access_token);
      localStorage.setItem('user', btoa(JSON.stringify(response.user)));
      this.currentUserSubject.next(response.user);
      return response;
    }));
  }

  public logout() {
    return this.http.get(environment.url + 'auth/logout', { responseType: "json", });
  }


  public refreshToken(form:any) {

    return this.http.post(environment.url + 'auth/refresh-token',form,{
      responseType: "json",
    }).pipe(map((response:any) => {
      localStorage.setItem('accessToken', response.access_token);
      localStorage.setItem('user', btoa(JSON.stringify(response.user)));
      this.currentUserSubject.next(response.user);
      return response;
    }));

  }

  public updateUser(form:any,id:any) {

    return this.http.post(environment.url + `user/update-image/${id}`,form,{
      responseType: "json",
    })

  }
  public updateUserInfo(form:any) {

    return this.http.post(environment.url + `user/update-user`,form,{
      responseType: "json",
    })

  }
  public updatePassword(form:any,id:any) {

    return this.http.post(environment.url + `user/update-password/${id}`,form,{
      responseType: "json",
    })

  }

}
