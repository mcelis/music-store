export interface ILogin {

  user: string;
  password: string;

}

export interface IApiLogin {
  success : boolean,
  message : string,
  token? : string
}
