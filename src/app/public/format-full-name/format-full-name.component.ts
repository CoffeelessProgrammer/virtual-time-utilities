import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { arrayCycleRight, copyToClipboard, trimWhitespace } from 'src/app/shared/utility';

@Component({
  selector: 'app-format-full-name',
  templateUrl: './format-full-name.component.html',
  styleUrls: ['./format-full-name.component.scss']
})
export class FormatFullNameComponent implements OnInit {

  autoCopyNameToClipboard = new FormControl(false);

  formattedName: string;

  constructor() { }

  ngOnInit() {
    this.formattedName = "Roche, Louis George Maurice Adolphe, Jr.";
  }

  formatName(fullName: string) {

    if(fullName != "") {
      fullName = trimWhitespace(fullName);

      let nameArray: Array<string> = fullName.split(' ');

      let suffixPresent = nameArray[nameArray.length-1].charAt(nameArray[nameArray.length-1].length-1) === '.';
      
      // If a suffix is present, store separately
      let suffix: string;

      if(suffixPresent) {
        suffix = trimWhitespace(nameArray[nameArray.length-1]);
        nameArray.pop();
      }
  
      // Bring last name to front by cycling name elements to the right by 1
      let cycledNameArray: Array<string> = arrayCycleRight(nameArray, 1);
  
      // Add comma after last name
      if(cycledNameArray.length > 1) {
        cycledNameArray[0] = cycledNameArray[0] + ',';
      }

      // If suffix present, add comma to last name element, then add suffix
      if(suffixPresent) {
        cycledNameArray[cycledNameArray.length-1] = cycledNameArray[cycledNameArray.length-1] + ',';
        cycledNameArray.push(suffix);
      }
  
      // Capitalize name elements
      for(let i=0; i<cycledNameArray.length; ++i) {
        cycledNameArray[i] = cycledNameArray[i].charAt(0).toUpperCase() + cycledNameArray[i].slice(1);
      }
  
      // Join name elements with spaces
      this.formattedName = cycledNameArray.join(' ');

      if(this.autoCopyNameToClipboard.value) {
        copyToClipboard(this.formattedName);
      }
    }
    
  }

  copyToClipboard(val: string) {

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
