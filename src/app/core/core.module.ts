import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AngularMaterialModule } from './material.module';

import { GeneralService } from './services';


@NgModule({
  exports: [
    BrowserModule,
    HttpClientModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  declarations: [],
  imports: [],
  providers:[
    GeneralService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("Import core module ONLY in the root module")
    }
  }
}