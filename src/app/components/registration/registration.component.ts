import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  styleUrls: ['registration.scss'],
  templateUrl: 'registration.components.html',
})
export class RegistrationComponent implements OnInit {
  public newUser: Object = {};
  public ngOnInit() {}
  public onRegistration() {
    console.log(this.newUser);
  }
}
