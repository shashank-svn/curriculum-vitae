import { Component, OnInit } from "@angular/core";

interface Education {
  course: string;
  institution: string;
  duration: string;
  description: string;
}

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {

  educationArr: Education[];
  constructor() {}

  ngOnInit() {
    this.educationArr = [
      {
        course: "Bachelor of Engineering",
        institution: "PES College of Engineering",
        duration: "2014-2018",
        description: "I pursued my engineering in Electronics and Communication from PES College of Engineering, Mandya. I have overall CGPA of 9.17 in my bachelor's degree."
      }, {
        course: "Pre-University",
        institution: "Jawahar Navodaya Vidyalaya, Mysore",
        duration: "2012-2014",
        description: "I completed class XI and XII in science stream from Jawahar Navodaya Vidyalaya(CBSE Board)."
      },  {
        course: "High School",
        institution: "Jawahar Navodaya Vidyalaya, Mysore",
        duration: "2007-2012",
        description: "I completed high school from Jawahar Navodaya Vidyalaya(CBSE Board)."
      }
    ]
  }
}
