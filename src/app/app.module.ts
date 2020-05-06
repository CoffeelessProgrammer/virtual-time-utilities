import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PublicMainComponent } from './public/public-main/public-main.component';
import { SpeedFactorComponent } from './public/speed-factor/speed-factor.component';
import { NavigationBarComponent } from './public/layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './public/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicMainComponent,
    SpeedFactorComponent,
    NavigationBarComponent,
    FooterComponent
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
