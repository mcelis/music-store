import { IApiUserInfoResponse, IUserInfo } from '../interfaces/iuserinfo';

export class UserInfo implements IUserInfo {

  user: string;
  password: string;
  name: string;
  surnames: string;
  email: string;
  phone: number;
  rol: string;

  constructor(
    user: string,
    password: string,
    name: string,
    surnames: string,
    email: string,
    phone: number,
    rol: string
  ) {

    this.user = user;
    this.password = password;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
    this.phone = phone;
    this.rol = rol;
  }

}

export class ApiUserInfoResponse implements IApiUserInfoResponse {
  success: boolean;
  message: string;

  constructor(
    success: boolean,
    message: string,) {
    this.success = success;
    this.message = message;
  }

}
