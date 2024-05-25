import {Role} from "../enums/role";

export interface User {
  userId: number;
  email?: string;
  password?: string;
  fullName?:string;
  avatar?: string;
  appRoles: any[];
  role?:Role;
}
