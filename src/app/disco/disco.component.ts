import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Disc } from '../models/disc';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.scss']
})
export class DiscoComponent implements OnInit {

  public user: string | null;
  public token: string | null;

  cds: Disc[] = [
    {
      id: '1',
      image: 'assets/images/ultra.png',
      title: 'Ultra - Depeche Mode',
      price: 30000,
      description: 'Depeche Mode 1996 CD',
      type: '',
      artist: '',
      released: '',
      genre: ''
    },
    {
      id: '2',
      image: 'assets/images/backinblack.png',
      title: 'Back in Black - AC/DC',
      price: 28000,
      description: 'AC/CD 1980 CD',
      type: '',
      artist: '',
      released: '',
      genre: ''
    },
    {
      id: '3',
      image: 'assets/images/ultra.png',
      title: 'Ultra - Depeche Mode',
      price: 30000,
      description: 'Depeche Mode 1996 CD',
      type: '',
      artist: '',
      released: '',
      genre: ''
    },
    {
      id: '4',
      image: 'assets/images/backinblack.png',
      title: 'Back in Black - AC/DC',
      price: 28000,
      description: 'AC/CD 1980 CD',
      type: '',
      artist: '',
      released: '',
      genre: ''
    },
    {
      id: '5',
      image: 'assets/images/ultra.png',
      title: 'Ultra - Depeche Mode',
      price: 30000,
      description: 'Depeche Mode 1996 CD',
      type: '',
      artist: '',
      released: '',
      genre: ''
    },
    {
      id: '6',
      image: 'assets/images/backinblack.png',
      title: 'Back in Black - AC/DC',
      price: 28000,
      description: 'AC/CD 1980 CD',
      type: '',
      artist: '',
      released: '',
      genre: ''
    }
  ];


  constructor(private router: Router, private storageService: StorageService,) {
    this.user = "";
    this.token = '';
  }

  ngOnInit(): void {
    if (!this.storageService.isAuthenticated()) {
      this.router.navigate(["/login"]);
    }
  }
  addDisc(id: string) {
    console.log('Compact Disc');
    console.log(id);
  }

}
