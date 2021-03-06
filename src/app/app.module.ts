import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscComponent } from './components/disc/disc.component';
import { BuycartComponent } from './components/buycart/buycart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscoComponent } from './disco/disco.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { DiscDetailComponent } from './components/disc-detail/disc-detail.component';
import { LayoutComponent } from './components/layout/layout.component'

import { } from './material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { DiscCreateComponent } from './components/disc-create/disc-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscComponent,
    BuycartComponent,
    HomeComponent,
    ContactComponent,
    DiscoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
    UserRegisterComponent,
    DiscDetailComponent,
    LayoutComponent,
    DiscCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
