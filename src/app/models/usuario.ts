import { IUsuario } from "../interfaces/iusuario";

export class Usuario implements IUsuario {

  user: string;
  password: string;
  name: string;
  surnames: string;
  email: string;
  phone: number;

  constructor(
    user: string,
    password: string,
    name: string,
    surnames: string,
    email: string,
    phone: number,
  ) {

    this.user = user;
    this.password = password;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
    this.phone = phone;

  }

}
