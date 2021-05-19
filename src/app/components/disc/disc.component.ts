import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Disc} from '../../models/disc'

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
  
  addCart(){
    console.log('se agrego al carrito');
    this.discadded.emit(this.cd.id);
  }
  constructor() { 
    this.cd = new Disc('','',0,'','','','','','');
  }

  ngOnInit() :void{
  }

}
