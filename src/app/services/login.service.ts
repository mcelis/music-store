import { Login } from './../models/login';
import { Injectable } from '@angular/core';
import { ILogin, ApiLogin } from './../interfaces/ilogin'
import { HttpClient  } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: ILogin[] = [];

  constructor(private http: HttpClient) {
  }

  userLogin(login: ILogin) {
    //debugger;

    this.http.post<ApiLogin>('http://localhost:1337/api/user/login', login).subscribe(data => {
      console.log(data);
      //debugger;

      return data;
    })
  }

}
