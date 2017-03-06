import { Routes } from '@angular/router';
import { NoContentComponent } from './shared/components/no-content';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login';
import { MainPageComponent } from './components/main-page';
import { RegistrationComponent } from './components/registration';

export const ROUTES: Routes = [
  { path: '',    component: MainPageComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'registration',    component: RegistrationComponent },
  { path: '**',    component: NoContentComponent },
];
