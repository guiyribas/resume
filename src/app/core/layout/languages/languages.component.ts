import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languagesArray = [];

  constructor() {
    this.languagesArray = [
      { name: 'Portuguese', skillRange: 100 },
      { name: 'English', skillRange: 80 },
      { name: 'Spanish', skillRange: 80 }
    ];
  }

  ngOnInit() {}
}
