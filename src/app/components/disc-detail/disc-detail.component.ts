import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DiscService } from 'src/app/services/disc.service';
import { Disc } from '../../models/disc';

@Component({
  selector: 'app-disc-detail',
  templateUrl: './disc-detail.component.html',
  styleUrls: ['./disc-detail.component.scss']
})
export class DiscDetailComponent implements OnInit {

  disc: Disc | undefined; //new Disc('','',0,'','','','','','')
  constructor(
    private route: ActivatedRoute,
    private discService: DiscService
  ) {
    this.disc = new Disc(0, '', 0, '', '', '', '', '', '');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;

      this.discService.getDiscByIdWs(id).subscribe(
        data => {
          if (data.success) {
            this.disc = data.data[0];
            console.log(this.disc);
          }
        }, err => { console.log("error>>>" + err) }

      );
    });

  }

}
