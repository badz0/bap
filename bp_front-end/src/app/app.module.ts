import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ToasterModule, ToasterService } from 'angular2-toaster';

import { CollapseModule } from 'ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './shared/components/no-content';
import { LoginComponent } from './components/login';
import { LoginService } from './components/login/login.service';
import { MainPageComponent } from './components/main-page';
import { RegistrationComponent } from './components/registration';
import { HeaderComponent } from './shared/components/header';
import { ProfileModule } from './components/profile';
// import '../styles/styles.scss';
import { AuthGuard } from './shared/guard/auth.guard';

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
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    CollapseModule.forRoot(),
    ToasterModule,
    CarouselModule.forRoot()
  ],
  providers: [
    ENV_PROVIDERS,
    ToasterService,
    LoginService,
    AuthGuard
  ]
})
export class AppModule {}
