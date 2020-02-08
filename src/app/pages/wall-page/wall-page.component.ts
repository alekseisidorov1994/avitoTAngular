import { Component, OnInit } from '@angular/core';
import {FetchService} from '../../services/fetch.service';


@Component({
  selector: 'app-wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.sass']
})
export class WallPageComponent implements OnInit {
  arrayImages = []
  constructor(private fetchService: FetchService ) { }

  ngOnInit() {

    if(localStorage.getItem('_data')){
      this.arrayImages = JSON.parse(localStorage.getItem('_data'))
    } else {
      this.fetchService.getListImages().subscribe(images => {
        this.arrayImages = images;
        localStorage.setItem('_data_', JSON.stringify(images));
      });
    }
  }

}
