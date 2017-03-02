import { Routes } from '@angular/router';
import { NoContentComponent } from './shared/components/no-content';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  // { path: '',      component: AppComponent },
  { path: '**',    component: NoContentComponent },
];
