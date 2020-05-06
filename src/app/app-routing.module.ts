import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicMainComponent } from './public/public-main/public-main.component';
import { SpeedFactorComponent } from './public/speed-factor/speed-factor.component';

import { PageNotFoundComponent } from './shared/components';
import { AccessRestrictedComponent } from './shared/components';


const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public', component: PublicMainComponent,
    children: [
      { path: '', redirectTo: 'speed-factor', pathMatch: 'full' },
      { path: 'speed-factor', component: SpeedFactorComponent },
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