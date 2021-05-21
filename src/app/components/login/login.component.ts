import { ApiLogin } from './../../interfaces/ilogin';
import { Login } from './../../models/login';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  _modelLogin: Login;
  //respSvcLogin!: ApiLogin;

  constructor(private router: Router, private fb: FormBuilder, private _LoginService: LoginService) {

    this.rForm = fb.group({
      'user': ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this._modelLogin = new Login("", "");
  }

  ngOnInit(): void {
    this._modelLogin = new Login("", "");
  }

  onSubmit(post: any) {
    this.userLogin(post);
  }

  userLogin(post: any) {
    this._modelLogin.user = post.user;
    this._modelLogin.password = post.password;

    let respSvcLogin = this._LoginService.userLogin(this._modelLogin);



    this.router.navigate(["/disco"]);
  }

}
