import { Component, OnInit } from '@angular/core';

interface skill {
  name: string,
  selfAppraisal: number,
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  skills: skill[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      {
        name: "Angular",
        selfAppraisal: 78
      },
      {
        name: "Ionic",
        selfAppraisal: 72
      },
      {
        name: "Javascript",
        selfAppraisal: 65
      },
      {
        name: "Typescript",
        selfAppraisal: 70
      },
      {
        name: "HTML5",
        selfAppraisal: 70
      },
      {
        name: "CSS3",
        selfAppraisal: 72
      }, {
        name: "Bootstrap",
        selfAppraisal: 65
      }
    ]
  }
}
