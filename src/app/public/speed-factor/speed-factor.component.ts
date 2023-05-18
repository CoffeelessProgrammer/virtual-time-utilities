import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-speed-factor',
  templateUrl: './speed-factor.component.html',
  styleUrls: ['./speed-factor.component.scss']
})
export class SpeedFactorComponent implements OnInit, OnDestroy {

  speedFactorForm: UntypedFormGroup;

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

    this.speedFactorForm = new UntypedFormGroup({
      real_start: new UntypedFormGroup({
        date: new UntypedFormControl(today),
        time: new UntypedFormControl('00:00')
      }),
      real_end: new UntypedFormGroup({
        date: new UntypedFormControl(tomorrow),
        time: new UntypedFormControl('00:00')
      }),
      virtual_start: new UntypedFormGroup({
        date: new UntypedFormControl(today),
        time: new UntypedFormControl('00:00')
      }),
      virtual_target: new UntypedFormGroup({
        date: new UntypedFormControl(placeholderVirtualTarget),
        time: new UntypedFormControl('00:00')
      })
    });

    this.calculateSpeedFactor();

  }

  ngOnDestroy() {
    this.speedFactorForm = null;
  }

  // ---------------------- Update Date & Time Values ----------------------

  updateRealStartDate(dateInput: Date, timeInput: String) {

    // If no time input was provided, revert to midnight
    if(timeInput.length != 5) {
      this.speedFactorForm.patchValue({
        real_start: {
          time: "00:00"
        }
      });
    }

    // Build and save the date object
    this.speedFactorForm.patchValue({
      real_start: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });

    this.calculateSpeedFactor();
  }

  updateRealEndDate(dateInput: Date, timeInput: String) {

    if(timeInput.length != 5) {
      this.speedFactorForm.patchValue({
        real_end: {
          time: "00:00"
        }
      });
    }

    this.speedFactorForm.patchValue({
      real_end: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });

    this.calculateSpeedFactor();
  }

  updateVirtualStartDate(dateInput: Date, timeInput: String) {

    if(timeInput.length != 5) {
      this.speedFactorForm.patchValue({
        virtual_start: {
          time: "00:00"
        }
      });
    }

    this.speedFactorForm.patchValue({
      virtual_start: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });

    this.calculateSpeedFactor();
  }

  updateVirtualTargetDate(dateInput: Date, timeInput: String) {

    if(timeInput.length != 5) {
      this.speedFactorForm.patchValue({
        virtual_target: {
          time: "00:00"
        }
      });
    }

    this.speedFactorForm.patchValue({
      virtual_target: {
        date: this.buildDateTime(dateInput, timeInput)
      }
    });

    this.calculateSpeedFactor();
  }

  // ------------------------- Speed Factor Calculation -------------------------

  calculateSpeedFactor() {

    let realTimeDuration = this.timeDiffInMinutes(
      this.speedFactorForm.value["real_start"]["date"],
      this.speedFactorForm.value["real_end"]["date"]
    );

    let virtualTimeDuration = this.timeDiffInMinutes(
      this.speedFactorForm.value["virtual_start"]["date"],
      this.speedFactorForm.value["virtual_target"]["date"]
    );

    this.speedFactor = this.round(virtualTimeDuration/realTimeDuration, 6);
  }
  
  // calculateSpeedFactorManual() {
    
  //   this.speedFactorForm.patchValue({
  //     real_start: {
  //       date: this.buildDateTime(
  //         this.speedFactorForm.value["real_start"]["date"],
  //         this.speedFactorForm.value["real_start"]["time"])
  //     },
  //     real_end: {
  //       date: this.buildDateTime(
  //         this.speedFactorForm.value["real_end"]["date"],
  //         this.speedFactorForm.value["real_end"]["time"])
  //     },
  //     virtual_start: {
  //       date: this.buildDateTime(
  //         this.speedFactorForm.value["virtual_start"]["date"],
  //         this.speedFactorForm.value["virtual_start"]["time"])
  //     },
  //     virtual_target: {
  //       date: this.buildDateTime(
  //         this.speedFactorForm.value["virtual_target"]["date"],
  //         this.speedFactorForm.value["virtual_target"]["time"])
  //     }
  //   });

  //   this.calculateSpeedFactor();
  // }

  // ----------------------- Date Utility Methods -----------------------

  resetDay(day: Date) {
    day.setHours(0);
    day.setMinutes(0);
    day.setSeconds(0);
    day.setMilliseconds(0);
  }

  buildDateTime(date: Date, time: String): Date {
    
    // Date validation
    let newDate: Date = new Date(date);

    if(date.toString() === "" || isNaN(newDate.getTime())) {
      newDate = new Date();
    }

    // Time validation
    let split_time = time.split(':');
    let hours = isNaN(Number.parseInt(split_time[0])) ? 0 : Number.parseInt(split_time[0]);
    let minutes = isNaN(Number.parseInt(split_time[1])) ? 0 : Number.parseInt(split_time[1]);

    // Build date' time
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);

    // console.log("Building...", newDate);

    return newDate;
  }

  // ------------------------- Utility Methods -------------------------

  timeDiffInMinutes(time1: Date, time2: Date) {
    let milliseconds = time2.getTime() - time1.getTime();
    return Math.floor(milliseconds/60000);
  }

  round(value, precision) {
    let num = value+'e'+precision;
    return Number(Math.round(Number.parseFloat(num))+'e-'+precision);
  }

  copyToClipboard(val: string){

    let selectBox = document.createElement('textarea');
    selectBox.style.position = 'fixed';
    selectBox.style.left = '0';
    selectBox.style.top = '0';
    selectBox.style.opacity = '0';
    selectBox.value = val;

    document.body.appendChild(selectBox);
    selectBox.focus();
    selectBox.select();
    document.execCommand('copy');
    document.body.removeChild(selectBox);
  }

}
