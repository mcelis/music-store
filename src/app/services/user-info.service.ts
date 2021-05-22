
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiUserInfoResponse, IUserInfo } from '../interfaces/iuserinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {
  }

  createUser(userInfo: IUserInfo):Observable<any> {
    return this.http.post<IApiUserInfoResponse>('/api/user/register', userInfo);
  }
}
