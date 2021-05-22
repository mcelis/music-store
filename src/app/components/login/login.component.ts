
import { Login, ApiLoginResponse } from './../../models/login';
import { LoginService } from './../../services/login.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() tokenEvent: EventEmitter<string> = new EventEmitter();

  strToken: string;

  rForm: FormGroup;
  _modelLogin: Login;
  respSvcLogin: ApiLoginResponse;
  messageError: string;

  constructor(private router: Router, private fb: FormBuilder, private _LoginService: LoginService) {

    this.rForm = fb.group({
      'user': ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this._modelLogin = new Login("", "");
    this.respSvcLogin = new ApiLoginResponse(false, '', '')
    this.messageError = '';
    this.strToken = '';
  }

  ngOnInit(): void {
    this._modelLogin = new Login("", "");
    this.respSvcLogin = new ApiLoginResponse(false, '', '');
    this.messageError = '';
  }

  onSubmit(post: any) {
    this.userLogin(post);
  }

  userLogin(post: any) {
    this._modelLogin.user = post.user;
    this._modelLogin.password = post.password;

    this._LoginService.userLogin(this._modelLogin).subscribe(
      data => {
        if (data.success) {
          this.strToken = data.token;
          this.router.navigate(["/disco"]);
        } else {
          this.messageError = data.message;
          console.log(this.messageError);
          this.strToken = 'token';
        }
      },
      err => { }
    );

  }



}
