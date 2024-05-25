import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {Unsubcriber} from "../../models/unsubcriber";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {Role} from "../../enums/role";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent extends Unsubcriber implements OnInit {

  constructor(public auth : UserService,private route : Router){
    super()
  }

  ngOnInit(): void {
    initFlowbite();
  }

  logout(){
    this.anotherSubscription = this.auth.logout().subscribe(res => {
      localStorage.clear();
      this.route.navigate(["/"])
    })
  }


  protected readonly Role = Role;
}
