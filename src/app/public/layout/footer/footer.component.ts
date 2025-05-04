import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
