import { Login } from './../models/login';
import { Injectable } from '@angular/core';
import { ILogin, ApiLogin } from './../interfaces/ilogin'
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: ILogin[] = [];
  login$: Subject<ILogin[]>;

  constructor(private http: HttpClient) {
    this.login$ = new Subject();
  }

  userLogin(login: ILogin) {
    this.http.post<ApiLogin>('/user/login', login).subscribe(data => {
      return data;
    })
  }

}
