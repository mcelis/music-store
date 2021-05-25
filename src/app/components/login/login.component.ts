import { Session } from './../../models/Session';
import { StorageService } from './../../services/storage.service';

import { Login, ApiLoginResponse } from './../../models/login';
import { LoginService } from './../../services/login.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  session: Session;

  rForm: FormGroup;
  _modelLogin: Login;
  respSvcLogin: ApiLoginResponse;
  messageError: string | null;

  hide = true;

  constructor(private router: Router, private fb: FormBuilder, private _LoginService: LoginService, private storageService: StorageService) {

    this.rForm = fb.group({
      'user': ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this._modelLogin = new Login("", "");
    this.respSvcLogin = new ApiLoginResponse(false, '', '')
    this.messageError = '';
    this.session = new Session('', '', '');
  }

  ngOnInit(): void {
    this._modelLogin = new Login("", "");
    this.respSvcLogin = new ApiLoginResponse(false, '', '');
    this.messageError = '';
  }

  onSubmit(post: any) {
    this.messageError = '';
    this.userLogin(post);
  }

  userLogin(post: any) {
    this._modelLogin.user = post.user;
    this._modelLogin.password = post.password;

    this._LoginService.userLogin(this._modelLogin).subscribe(
      data => {
        if (data.success) {

          this.session.token = data.token;
          this.session.user = post.user;
          this.session.rol = data.rol;

          this.storageService.setCurrentSession(this.session);

          this.router.navigate(["/disco"]);
        } else {
          this.messageError = data.message;
        }
      },
      err => { }
    );

  }

  clearError() {
    this.messageError = null;
  }

}
