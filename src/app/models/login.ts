import { ILogin } from "../interfaces/ilogin";

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
