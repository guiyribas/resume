import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs = [];

  constructor() {
    this.jobs = [
      {
        company: 'Zap Technology (Current)',
        function: 'Front end Developer',
        dateString: '04/2019 - Present',
        location: 'Cascavel, Paraná, Brazil',
        jobFunction:
          'Creation of responsive web systems using the Angular platform. Most of the projects ' +
          'using Angular Material as an assistant for the development of the pages',
        mainTasks: ['Consume  a RESTful API', 'Consume  a GraphQL API']
      },
      {
        company: 'R.Project Web Studio',
        function: 'Front end Developer',
        dateString: '01/2017 - 06/2017',
        location: 'Curitiba, Paraná, Brazil - Remote',
        jobFunction:
          'Creation, maintenance and updating of company websites. All sites were developed in WordPress',
        mainTasks: [
          'Create plugins specific for each site',
          'Make sure that the websites haven\'t been broken after an update'
        ]
      },
      {
        company: 'UNIOESTE NIT - Technological Innovations Center',
        function: 'Internship',
        dateString: '06/2014 - 06/2016',
        location: 'Cascavel, Paraná, Brazil',
        jobFunction:
          'Development of sector website in Joomla. Development of the sector control software prototype using Java',
        mainTasks: [
          'Create a responsive website so users could see the latest industry news and see patent registration files',
          'Create an application using Java for better control of patent records'
        ]
      },
      {
        company: 'UNIOESTE NIT - Technological Innovations Center',
        function: 'Internship',
        dateString: '01/2013 - 01/2014',
        location: 'Cascavel, Paraná, Brazil',
        jobFunction:
          'Technical assistance and campus network maintenance',
        mainTasks: [
          'Fix all kind of hardware problem envolving any campus PC',
          'Do the maintenance of the campus network'
        ]
      }
    ];
  }

  ngOnInit() {}
}
