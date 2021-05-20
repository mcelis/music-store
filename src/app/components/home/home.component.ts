import { Component, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  valSwiper!: Swiper;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.valSwiper = new Swiper('.swiper-container');
  }
}
