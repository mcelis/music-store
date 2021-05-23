import { Injectable } from '@angular/core';
import { Disc } from '../models/disc';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private discs: Disc[] = [];
  private cart = new BehaviorSubject<Disc[]>([]);

  cartEvent$ = this.cart.asObservable();
  constructor() { }

  addCart(disc:Disc){
    this.discs = [...this.discs, disc];
    this.cart.next(this.discs);
  }
}
