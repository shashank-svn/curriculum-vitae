import { Component, OnInit } from '@angular/core';

interface ProfileData {
  key: string,
  value: string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profile: ProfileData[];
  constructor() { }

  ngOnInit() {
    this.profile = [
      {
        key: "Name",
        value: "Shashank S V N"
      }, {
        key: "Birthday",
        value: "6th March, 1997"
      }, {
        key: "Place of Birth",
        value: "Mysore"
      }, {
        key: "Nationality",
        value: "India"
      }
    ]
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

  openMyCv() {
    window.open('assets/files/SHASHANK_CV.pdf', '_blank')
  }

}
