import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-speed-factor',
  templateUrl: './speed-factor.component.html',
  styleUrls: ['./speed-factor.component.scss']
})
export class SpeedFactorComponent implements OnInit, OnDestroy {

  speedFactorForm: FormGroup;

  speedFactor: number = 0;

  constructor() { }

  ngOnInit() {

    // const now = new Date();

    let today = new Date();
    this.resetDay(today);

    // console.log("Today:", today);

    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.resetDay(tomorrow);

    // console.log("Tomorrow:", tomorrow);

    let placeholderVirtualTarget = new Date();
    placeholderVirtualTarget.setDate(today.getDate() + 3);
    this.resetDay(placeholderVirtualTarget);

    // console.log("Virtual Target:", placeholderVirtualTarget);

    this.speedFactorForm = new FormGroup({
      real_start: new FormGroup({
        date: new FormControl(today),
        time: new FormControl('00:00')
      }),
      real_end: new FormGroup({
        date: new FormControl(tomorrow),
        time: new FormControl('00:00')
      }),
      virtual_start: new FormGroup({
        date: new FormControl(today),
        time: new FormControl('00:00')
      }),
      virtual_target: new FormGroup({
        date: new FormControl(placeholderVirtualTarget),
        time: new FormControl('00:00')
      })
    });

  }

  calculateSpeedFactor() {

    let realTimeDuration = this.timeDiffInMinutes(
      this.speedFactorForm.value["real_start"]["date"],
      this.speedFactorForm.value["real_end"]["date"]
    );

    let virtualTimeDuration = this.timeDiffInMinutes(
      this.speedFactorForm.value["virtual_start"]["date"],
      this.speedFactorForm.value["virtual_target"]["date"]
    );

    this.speedFactor = virtualTimeDuration/realTimeDuration;
  }

  // Methods to update time values -----------------------------------

  updateRealStartDate(dateInput: Date, timeInput: String) {
    this.speedFactorForm.patchValue({
      real_start: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });
  }

  updateRealEndDate(dateInput: Date, timeInput: String) {
    this.speedFactorForm.patchValue({
      real_end: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });
  }

  updateVirtualStartDate(dateInput: Date, timeInput: String) {
    this.speedFactorForm.patchValue({
      virtual_start: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });
  }

  updateVirtualTargetDate(dateInput: Date, timeInput: String) {
    this.speedFactorForm.patchValue({
      virtual_target: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });
  }

  ngOnDestroy() {
    this.speedFactorForm = null;
  }

  resetDay(day: Date) {
    day.setHours(0);
    day.setMinutes(0);
    day.setSeconds(0);
    day.setMilliseconds(0);
  }

  buildDateTime(date: Date, time: String): Date {
    
    let newDate = new Date(date);

    let split_time = time.split(':');

    newDate.setHours(Number.parseInt(split_time[0]));
    newDate.setMinutes(Number.parseInt(split_time[1]));
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);

    return newDate;
  }

  timeDiffInMinutes(time1, time2) {
    let milliseconds = time2 - time1;
    return Math.floor(milliseconds/60000);
  }

}
