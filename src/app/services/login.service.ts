import { Login, ApiLogin } from './../models/login';
import { Injectable } from '@angular/core';
import { ILogin, IApiLogin } from './../interfaces/ilogin'
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  userLogin(login: ILogin):Observable<any> {
    return this.http.post<IApiLogin>('/api/user/login', login);
  }

}
