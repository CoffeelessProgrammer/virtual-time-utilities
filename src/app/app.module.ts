import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PublicMainComponent } from './public/public-main/public-main.component';
import { SpeedFactorComponent } from './public/speed-factor/speed-factor.component';
import { NavigationBarComponent } from './public/layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './public/layout/footer/footer.component';
import { FormatFullNameComponent } from './public/format-full-name/format-full-name.component';
import { HomeComponent } from './public/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicMainComponent,
    SpeedFactorComponent,
    NavigationBarComponent,
    FooterComponent,
    FormatFullNameComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
