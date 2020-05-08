import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'virtual-time-utilities';
  version = 'Sneaky Albatross';

  ngOnInit() {
    console.log("Version:", this.version);
  }
}
