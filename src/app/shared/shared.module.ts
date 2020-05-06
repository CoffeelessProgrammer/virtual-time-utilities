import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components';
import { AccessRestrictedComponent } from './components/access-restricted/access-restricted.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    AccessRestrictedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PageNotFoundComponent,
    AccessRestrictedComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
