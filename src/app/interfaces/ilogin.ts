export interface ILogin {

  user: string;
  password: string;

}

export interface ApiLogin {
  success : boolean,
  message : string,
  token? : string
}
