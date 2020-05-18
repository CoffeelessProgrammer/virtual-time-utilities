import { Component, OnInit } from '@angular/core';

// import * as utilitiesJSON from 'src/assets/public-utilities.json';
import utilitiesJSON from 'src/assets/public-utilities.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  utilities;

  constructor() { }

  ngOnInit() {
    // this.utilities = utilitiesJSON["default"];
    this.utilities = utilitiesJSON;
  }

  printToConsole(label: string, ...value) {
    console.log(label, value);
  }

}
