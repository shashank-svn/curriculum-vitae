import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSocialApp(targetApp: string) {
    if(targetApp === 'github') {
      window.open('https://github.com/shashank-svn', '_blank')
    } else if(targetApp === 'linkedIn') {
      window.open('https://www.linkedin.com/in/shashank-s-v-n-830593174', '_blank')
    } else if(targetApp === 'facebook') {
      window.open('https://www.facebook.com/michel.shashank', '_blank')
    }
  }

}
