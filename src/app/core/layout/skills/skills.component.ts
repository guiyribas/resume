import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsArray = [];

  constructor() {
    this.skillsArray = [
      { name: 'Angular', skillRange: 100 },
      { name: 'JavaScript', skillRange: 80 },
      { name: 'TypeScript', skillRange: 80 },
      { name: 'HTML', skillRange: 100 },
      { name: 'CSS', skillRange: 100 },
      { name: 'Angular Material', skillRange: 100 },
      { name: 'Bootstrap', skillRange: 80 },
      { name: 'RESTful Services', skillRange: 100 },
      { name: 'GraphQL Services', skillRange: 80 },
      { name: 'PostgreSQL / MySQL', skillRange: 80 },
      { name: 'Git', skillRange: 100 }
    ];
  }

}
