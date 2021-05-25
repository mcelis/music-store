
import { ILogin, IApiLoginResponse } from "../interfaces/ilogin";

export class Login implements ILogin {

  user: string;
  password: string;

  constructor(
    user: string,
    password: string,
  ) {

    this.user = user;
    this.password = password;

  }

}

export class ApiLoginResponse implements IApiLoginResponse {
  success: boolean;
  message: string;
  rol?: string;
  token?: string;

  constructor(
    success: boolean,
    message: string,
    rol?: string,
    token?: string) {
    this.success = success;
    this.message = message;
    this.rol = rol;
    this.token = token;
  }

}
