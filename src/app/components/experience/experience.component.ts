import { Component, OnInit } from "@angular/core";

interface workHistory {
  projectName: string;
  projectDesc: string;
  role: string;
  period: string;
  company: string;
  androidLink?: string;
  iosLink?: string;
  webUrl?: string;
}

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  workHistories: workHistory[];

  constructor() {}

  ngOnInit() {
    this.workHistories = [{
      projectName: "Axis Mutual Fund Investor App",
      projectDesc: "It is an official Mobile App of Axis Mutual Fund for investors. Axis Mutual Fund Application was built on Ionic and Angular Framework targeting Web, Android and IOS platform. Axis Mutual Fund App enables new investors, first time investors (KYC verified) and existing investors of Axis Mutual Fund to do investments anywhere/anytime.",
      role: "Hybrid Application Developer",
      period: "Dec 2019 - Present",
      company: "Robosoft Technologies",
      androidLink: "https://play.google.com/store/apps/details?id=com.axismf.investorapp",
      iosLink: "https://apps.apple.com/in/app/axis-mutual-fund-sip-elss-mf/id1509062818",
      webUrl: "https://www.axismf.com/"
    }, {
      projectName: "ITI Mutual Fund App",
      projectDesc: "ITI Mutual Fund Application was built on Ionic and Angular Framework targeting web portal and mobile applications(Android and IOS). It is a distributor application. The application helps to initiate and manage client's investments.",
      role: "Hybrid Application Developer",
      period: "Jun 2019 - Dec 2019",
      company: "Robosoft Technologies",
      androidLink: "https://play.google.com/store/apps/details?id=com.itimf.jeeth"
    },
     {
      projectName: "Glam",
      projectDesc: "Funnel Music is a platform built on Angular that allows its primary users; managers, to support their artists by allowing them to connect through network of professionals to create music products under the shared outcome agreement(SOA). Once the manager has agreements in place, Funnel platform can release funds to the artist, manager and professionals involved.",
      role: "Web Application Developer",
      period: "May 2019 - Jun 2019",
      company: "Robosoft Technologies"
    },
     {
      projectName: "Huffy Byke",
      projectDesc: "The Huffy Corporation is a US based supplier of bicycles. The project requirement was to build CMS web portal for its client management. The CMS Admin console web application was built on Angular.",
      role: "Web Application Developer",
      period: "Jan 2019 - May 2019",
      company: "Robosoft Technologies"
    }
  ];
  }

  openLink(incomingLink: string) {
    window.open(incomingLink, '_blank');
  }
}
