import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { CollapseModule } from 'ng2-bootstrap';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './shared/components/no-content';
import { LoginComponent } from './components/login';
import { MainPageComponent } from './components/main-page';
import { RegistrationComponent } from './components/registration';
import { HeaderComponent } from './shared/components/header';
import { CarouselModule } from 'ng2-bootstrap/carousel';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    RegistrationComponent,
    NoContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    CollapseModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    ENV_PROVIDERS,
  ]
})
export class AppModule {}
