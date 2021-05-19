import { Component } from '@angular/core';
import { Disc} from './models/disc'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-store';

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

    addDisc(id:string){
      console.log('Compact Disc');
      console.log(id);
    }
  
}
