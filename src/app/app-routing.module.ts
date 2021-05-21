import { UserRegisterComponent } from './components/user-register/user-register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DiscoComponent} from './disco/disco.component';
import {ContactComponent} from './components/contact/contact.component'
import { DiscDetailComponent} from './components/disc-detail/disc-detail.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'disco',
    component: DiscoComponent
  },
  {
    path:'disco/:id',
    component: DiscDetailComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userRegister',
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
