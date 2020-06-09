import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicMainComponent } from './public/public-main/public-main.component';
import { HomeComponent } from './public/home/home.component';
import { SpeedFactorComponent } from './public/speed-factor/speed-factor.component';
import { FormatFullNameComponent } from './public/format-full-name/format-full-name.component';
import { TrueTimeComponent } from './public/true-time/true-time.component';

import { PageNotFoundComponent } from './shared/components';
import { AccessRestrictedComponent } from './shared/components';


const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public', component: PublicMainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'speed-factor-hidden', component: SpeedFactorComponent },
      { path: 'true-time', component: TrueTimeComponent },
      { path: 'format-name', component: FormatFullNameComponent },
      { path: 'login', component: AccessRestrictedComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }