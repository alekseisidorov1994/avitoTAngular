import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass']
})
export class PhotoComponent implements OnInit {
@Input() image
  constructor() { }

  ngOnInit() {
  }

}
