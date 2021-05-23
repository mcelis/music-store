import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {DiscoComponent} from '../../disco/disco.component';
import {Disc} from '../../models/disc';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.scss']
})
export class DiscComponent implements OnInit {

  title='music-store';
  @Input() cd: Disc;
  @Output()
  discadded: EventEmitter<any> = new EventEmitter();

  sysdate = new Date();

  
  
  addCart(){
    console.log('se agrego al carrito');
    this.cartService.addCart(this.cd);
    //this.discadded.emit(this.cd.id);
  }
  constructor(
    private cartService: CartService
  ) { 
    this.cd = new Disc('','',0,'','','','','','');
  }

  ngOnInit() :void{
  }

}
