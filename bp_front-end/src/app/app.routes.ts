import { Routes } from '@angular/router';
import { NoContentComponent } from './shared/components/no-content';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login';
import { MainPageComponent } from './components/main-page';
import { RegistrationComponent } from './components/registration';
import { AuthGuard } from './shared/guard/auth.guard';

export const ROUTES: Routes = [
  { path: '',    component: MainPageComponent },
  { path: 'main-page',    component: MainPageComponent },
  { path: 'profile', loadChildren: './components/profile#ProfileModule', canActivate: [AuthGuard] },
  { path: 'login',    component: LoginComponent },
  { path: 'registration',    component: RegistrationComponent },
  { path: '**',    component: NoContentComponent },
];
