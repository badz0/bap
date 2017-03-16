import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

import { ProfileData } from './profile-data.model';

@Component({
  selector: 'profile-data',
  styleUrls: ['profile-data.component.scss'],
  templateUrl: 'profile-data.component.html',
})
export class ProfileDataComponent implements OnInit {
  public profileData: ProfileData;

  constructor(private profileService: ProfileService) {
    this.profileData = new ProfileData();
  }

  public ngOnInit() {
    this.profileService.getProfileData()
      .subscribe( (profile: ProfileData) => {
        this.profileData = profile;
      }, (err) => {
        console.log(err);
        return false;
      });
  }
}
