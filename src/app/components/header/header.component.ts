import { StorageService } from './../../services/storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  totalDiscs = 0;
  constructor(
    private cartService: CartService, private storageService: StorageService
  ) {
    this.cartService.cartEvent$.subscribe(discs => {
      this.totalDiscs = discs.length;
    });
    this.isAuth = false;
  }

  ngOnInit(): void {
    this.isAuth = this.storageService.isAuthenticated();
    console.log(">>> isAuth " + this.isAuth);
  }

  LogOut() {
    this.storageService.logout();
  }

}
