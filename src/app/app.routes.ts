import { Routes } from '@angular/router';
import { NoContentComponent } from './shared/components/no-content';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page';

export const ROUTES: Routes = [
  { path: '',    component: MainPageComponent },
  { path: 'main-page',    component: MainPageComponent },
  { path: 'profile', loadChildren: './components/profile#ProfileModule' },
  { path: '**',    component: NoContentComponent },
];
