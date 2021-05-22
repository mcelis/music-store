export interface IUserInfo {

  user: string;
  password: string;
  name: string;
  surnames: string;
  email: string;
  phone: number;
}

export interface IApiUserInfoResponse {
  success : boolean,
  message : string,
}
