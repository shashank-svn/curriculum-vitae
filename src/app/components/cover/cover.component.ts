import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  skills: Array<string> = [
    'HYBRID MOBILE APPLICATION(IONIC)',
     'ANGULAR 6+ DEVELOPER'
  ];

  constructor() { }

  ngOnInit() {
  }

}
