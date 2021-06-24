import { Component, OnInit } from '@angular/core';

interface skill {
  loadingIndex: string,
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
        loadingIndex: "yellow-1",
        name: "Angular",
        selfAppraisal: 78
      },
      {
        loadingIndex: "yellow-2",
        name: "Ionic",
        selfAppraisal: 72
      },
      {
        loadingIndex: "yellow-3",
        name: "Javascript",
        selfAppraisal: 65
      },
      {
        loadingIndex: "yellow-4",
        name: "Typescript",
        selfAppraisal: 70
      },
      {
        loadingIndex: "yellow-5",
        name: "HTML5",
        selfAppraisal: 70
      },
      {
        loadingIndex: "yellow-6",
        name: "CSS3",
        selfAppraisal: 72
      }
    ]
  }
}
