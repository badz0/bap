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
import { CarouselModule } from 'ng2-bootstrap/carousel';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './shared/components/no-content';
import { MainPageComponent } from './components/main-page';
import { HeaderComponent } from './shared/components/header';

import { ProfileModule } from './components/profile';
// import '../styles/styles.scss';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    MainPageComponent,
    NoContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    // ProfileModule
  ],
  providers: [
    ENV_PROVIDERS,
  ]
})
export class AppModule {}
