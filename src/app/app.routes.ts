import { Routes } from '@angular/router';
import { NoContentComponent } from './shared/components/no-content';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page';

export const ROUTES: Routes = [
  // { path: '',      component: AppComponent },
  { path: '',    component: MainPageComponent },
  { path: '**',    component: NoContentComponent },
];
