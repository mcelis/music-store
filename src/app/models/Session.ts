export class Session {
  public token: string;
  public user: string;

  constructor(
    token: string,
    user: string) {
    this.token = token;
    this.user = user;
  }

}
