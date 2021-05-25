import { Component, Input, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //token: string;
  @Input() token: string;
  totalDiscs = 0;
  constructor(
    private cartService: CartService
  ) {
    this.token = '';
    this.cartService.cartEvent$.subscribe(discs =>{
      this.totalDiscs = discs.length;
    });
  }

  ngOnInit(): void {
  }


}
