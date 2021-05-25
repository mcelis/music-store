import { ApiUserInfoResponse } from './../../models/usuario';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/usuario';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  rForm: FormGroup;
  _modelIUserInfo: UserInfo;
  respSvcUser: ApiUserInfoResponse;
  messageError: string | null;
  messageSucces: string;

  constructor(private router: Router, private fb: FormBuilder, private _UserService: UserInfoService) {

    this.rForm = fb.group({
      'user': ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      "name": ["", Validators.compose([Validators.required,])],
      "surnames": ["", Validators.compose([Validators.required,])],
      "email": ["", Validators.compose([Validators.required,])],
      "phone": ["", Validators.compose([Validators.required, Validators.minLength(10)])],

    });

    this._modelIUserInfo = new UserInfo("", "", "", "", "", 0, "");
    this.respSvcUser = new ApiUserInfoResponse(false, '');
    this.messageError = '';
    this.messageSucces = '';
  }

  ngOnInit(): void {
  }

  onSubmit(post: any) {
    this.messageError = '';
    this.userRegister(post);
  }

  userRegister(post: any) {

    this._modelIUserInfo.user = post.user;
    this._modelIUserInfo.password = post.password;
    this._modelIUserInfo.name = post.name;
    this._modelIUserInfo.surnames = post.surnames;
    this._modelIUserInfo.email = post.email;
    this._modelIUserInfo.phone = post.phone;
    this._modelIUserInfo.rol = 'user';

    this._UserService.createUser(this._modelIUserInfo).subscribe(
      data => {

        if (data.success) {
          this.messageSucces = data.message;

          this.router.navigate(['/login']);
          //this.clearInputs();
        } else {
          this.messageError = data.message;
        }

      },
      err => { }
    );

  }

  clearInputs() {
    this.rForm.reset();
  }

  clearError() {
    this.messageError = '';
  }

}
