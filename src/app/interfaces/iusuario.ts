export interface IUsuario {

  user: string;
  password: string;
  name: string;
  surnames: string;
  email: string;
  phone: number;
}

export interface ApiUsuario {
  success : boolean,
  message : string,
}
