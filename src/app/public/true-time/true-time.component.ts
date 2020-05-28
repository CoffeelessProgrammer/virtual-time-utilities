import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DateTime } from 'luxon';
// import * as moment from 'moment';
// this.trueTimePST = moment.tz(now, "America/Los_Angeles").format("dddd, MMMM Do, yyyy, h:mm A");

import { GeneralService } from 'src/app/core/services';

// declare var dateFormat: any;
// this.trueTimeEST = dateFormat(new Date(isoDateString), "dddd, mmmm dS, yyyy, h:MM TT");

@Component({
  selector: 'app-true-time',
  templateUrl: './true-time.component.html',
  styleUrls: ['./true-time.component.scss']
})
export class TrueTimeComponent implements OnInit, OnDestroy {

  trueTimeUTC: String;

  trueTimeEST: String;
  trueTimePST: String;

  private $generalObs: Subscription;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.updateTrueTime();

    // Short Luxon Tutorial

    // console.log("Luxon: ", DateTime.local().setZone("America/Los_Angeles"));
    // console.log("Luxon: ", now.toLocaleString(DateTime.DATETIME_FULL));
    // console.log("Luxon: ", now.setZone("America/Los_Angeles").toLocaleString(DateTime.DATETIME_FULL));
    // console.log(now.toLocaleString(DateTime.DATETIME_FULL));

    // Test: 2020-05-27T18:48-04:00

    // let now = DateTime.fromISO("2020-08-27T18:48-04:00");

    // this.trueTimeUTC = now.setZone("utc").toLocaleString(DateTime.DATETIME_FULL);
    // this.trueTimeEST = now.toFormat("ff ZZZZ");
    // this.trueTimePST = now.setZone("America/Los_Angeles").toFormat("ff ZZZZ");
  }

  ngOnDestroy() {
    if(this.$generalObs == null) return;
    
    this.$generalObs.unsubscribe();
  }

  updateTrueTime() {
    let currentDateTime: String;
    let now: DateTime;
    
    // Call to World Clock API
    this.$generalObs = this.generalService.getTrueTimeEST().subscribe(response => {

      currentDateTime = response["currentDateTime"];

      now = DateTime.fromISO(currentDateTime);

      this.trueTimeUTC = now.setZone("utc").toLocaleString(DateTime.DATETIME_FULL);
      this.trueTimeEST = now.toFormat("ff ZZZZ");
      this.trueTimePST = now.setZone("America/Los_Angeles").toFormat("ff ZZZZ");
    });
  }

}
