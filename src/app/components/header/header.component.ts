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
  isAdmin: boolean;

  totalDiscs = 0;
  constructor(
    private cartService: CartService, private storageService: StorageService
  ) {
    this.cartService.cartEvent$.subscribe(discs => {
      this.totalDiscs = discs.length;
    });
    this.isAuth = false;
    this.isAdmin = false;
  }

  ngOnInit(): void {
    this.isAuth = this.storageService.isAuthenticated();
    this.isAdmin = this.storageService.getCurrentRolIsAdmin();
  }

  LogOut() {
    this.storageService.logout();
  }

}
