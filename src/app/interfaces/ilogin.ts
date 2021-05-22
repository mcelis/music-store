export interface ILogin {

  user: string;
  password: string;

}

export interface IApiLoginResponse {
  success : boolean,
  message : string,
  token? : string
}
