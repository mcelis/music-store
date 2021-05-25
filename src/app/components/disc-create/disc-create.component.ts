import { StorageService } from './../../services/storage.service';
import { DiscService } from 'src/app/services/disc.service';
import { Disc } from './../../models/disc';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-create',
  templateUrl: './disc-create.component.html',
  styleUrls: ['./disc-create.component.scss']
})
export class DiscCreateComponent implements OnInit {

  rForm: FormGroup;
  messageError: string | null;
  messageSucces: string;
  _modelDisc: Disc;

  constructor(private router: Router, private fb: FormBuilder, private _DiscService: DiscService, private storageService: StorageService,) {

    this.rForm = fb.group({
      'title': ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      "type": ["",],
      "released": ["", Validators.compose([Validators.required, Validators.minLength(4),])],
      "genre": ["", Validators.compose([Validators.required, Validators.minLength(3),])],
      "price": ["", Validators.compose([Validators.required,])],
      "image": ["", Validators.compose([Validators.required,])],
      "artist": ["", Validators.compose([Validators.required, Validators.minLength(3),])],
    });

    this._modelDisc = new Disc(0, '', 0, '', '', '', '', '', '');

    this.messageError = '';
    this.messageSucces = '';
  }

  ngOnInit(): void {
    if (!this.storageService.isAuthenticated()) {
      this.router.navigate(["/login"]);
    }

    if (!this.storageService.getCurrentRolIsAdmin()) {
      this.router.navigate(["/disco"]);
    }

  }

  onSubmit(post: any) {
    this.messageError = '';
    this.discCreate(post);
  }

  discCreate(post: any) {

    this._modelDisc.id = undefined;
    this._modelDisc.title = post.title;
    this._modelDisc.description = post.description;
    this._modelDisc.type = post.type;
    this._modelDisc.artist = post.artist;
    this._modelDisc.released = post.released;
    this._modelDisc.genre = post.genre;
    this._modelDisc.price = post.price;
    this._modelDisc.image = post.image;

    this._DiscService.createDiscWs(this._modelDisc).subscribe(
      data => {

        if (data.success) {
          this.messageSucces = data.message;

          this.router.navigate(['/disco']);
          //this.clearInputs();
        } else {
          this.messageError = data.message;
        }

      },
      err => { }
    );

  }

  clearInputs() {
    this.rForm.reset();
  }

  clearError() {
    this.messageError = '';
  }

}
