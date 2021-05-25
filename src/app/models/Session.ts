export class Session {
  public token: string;
  public user: string;
  public rol: string;

  constructor(
    token: string,
    user: string,
    rol:string) {
    this.token = token;
    this.user = user;
    this.rol = rol;
  }

}
