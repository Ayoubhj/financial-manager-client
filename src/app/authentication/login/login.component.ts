import {Component, OnInit} from '@angular/core';
import {Unsubcriber} from "../../models/unsubcriber";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends Unsubcriber implements OnInit {

   loginForm!: FormGroup;
   loadingLogin : boolean = false;
   login : boolean = true;
   showPassword: boolean = false;
   error: boolean = false;

   constructor(private fb: FormBuilder, private userService: UserService,private route :Router) {
     super();
   }
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
      })
    }
  get emailLogin() { return this.loginForm.get('email'); }
  get passwordLogin() { return this.loginForm.get('password'); }
  passwordShowFunction() {
    this.showPassword = !this.showPassword
    let password = document.getElementById("password")
    if (this.showPassword) {
      // @ts-ignore
      password.type = "text"
    } else {
      // @ts-ignore
      password.type = "password"
    }
  }


  loginSubmit(){
    this.error = false
    this.loadingLogin = true;
    this.anotherSubscription = this.userService.login(this.loginForm?.value).subscribe(response => {
      this.loadingLogin = false;
      this.route.navigate(["/main/dashboard"])
    },error => {
      this.loadingLogin = false;
      this.error = true
    });
  }
}
