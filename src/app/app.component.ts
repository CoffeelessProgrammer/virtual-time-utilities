import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'virtual-time-utilities';
  version = 'Blushing Anemone v0.2.2';

  ngOnInit() {
    console.log(this.version);
  }
}
