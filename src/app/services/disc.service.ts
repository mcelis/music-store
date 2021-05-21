import { Injectable } from '@angular/core';
import { IDisc } from '../interfaces/idisc';
import { Disc } from '../models/disc';


@Injectable({
  providedIn: 'root'
})
export class DiscService {

  disc : Disc;
  cds: Disc[] = [
    {
      id:'1',
      image:'assets/images/ultra.png',
      title:'Ultra - Depeche Mode',
      price: 30000,
      description: 'Depeche Mode 1996 CD',
      type:'',
      artist:'',
      released:'',
      genre:''
    },
    {
      id:'2',
      image:'assets/images/backinblack.png',
      title:'Back in Black - AC/DC',
      price: 28000,
      description: 'AC/CD 1980 CD',
      type:'',
      artist:'',
      released:'',
      genre:''
    }
  ];
  constructor() { this.disc = new Disc('','',0,'','','','','','')}

  getAllDisc(){
    return this.cds;
  }

  getDisc(id: string){
    return this.cds.find(item => id == item.id);
  }
}
