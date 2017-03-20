import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './profile.routes';
import { ProfileComponent } from './profile.component';
import { ProfileMenuComponent } from './profile-menu';
import { ProfileDataComponent } from './profile-data';

import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileMenuComponent,
    ProfileDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProfileService
  ],
  exports: [
  ]
})
export class ProfileModule {}
