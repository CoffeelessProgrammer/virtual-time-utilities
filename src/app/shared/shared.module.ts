import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components';
import { AccessRestrictedComponent } from './components/access-restricted/access-restricted.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    AccessRestrictedComponent
  ],
  imports: [
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    AccessRestrictedComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
