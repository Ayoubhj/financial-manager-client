import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Unsubcriber} from "../../models/unsubcriber";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {DefaultImage, StrongPasswordRegx, ValidEmailRegx, ValidPhoneNumberRegx} from "../../models/RegEx";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent extends Unsubcriber implements OnInit  {

  registerForm!: FormGroup;
  showPassword: boolean = false;
  error: boolean = false;
  loadingRegister : boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService,private route :Router) {
    super();
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.pattern(ValidPhoneNumberRegx)]],
      role: ['ROLE_USER', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(ValidEmailRegx)]],
      password: ['', [Validators.required, Validators.pattern(StrongPasswordRegx)]],
      image : [DefaultImage]
    })
  }

  get fullName() { return this.registerForm.get('fullName'); }
  get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  passwordShowFunction() {
    this.showPassword = !this.showPassword
    let password = document.getElementById("password")
    if (this.showPassword == true) {
      // @ts-ignore
      password.type = "text"
    } else {
      // @ts-ignore
      password.type = "password"
    }
  }

  registerSubmit(){
    this.loadingRegister = true;
    this.anotherSubscription = this.userService.register(this.registerForm.value).subscribe(response => {
      this.loadingRegister = false;
      this.route.navigate(["/main/dashboard"])
    },error => {
      this.loadingRegister = false;
    });
  }

}
