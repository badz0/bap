import { ProfileComponent } from './profile.component';
import { ProfileDataComponent } from './profile-data';

export const routes = [
  { path: '', component: ProfileComponent,
    children: [
    { path: 'profile-data', component: ProfileDataComponent },
  ]},
];
