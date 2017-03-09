import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './registration.service';
import { ToasterService } from 'angular2-toaster';
@Component({
  selector: 'app-registration',
  styleUrls: ['registration.scss'],
  templateUrl: 'registration.components.html',
  providers: [ RegistrationService ]
})
export class RegistrationComponent implements OnInit {
  public name: string;
  public username: string;
  public lastname: string;
  public birthDate: string;
  public email: string;
  public password: string;
  public agreement: boolean;

  constructor(private router: Router,
              private registrationService: RegistrationService,
              private toasterService: ToasterService) {}

  public ngOnInit() {}

  public clearAllFields() {
    this.name = '';
    this.username = '';
    this.lastname = '';
    this.birthDate = '';
    this.email = '';
    this.password = '';
    this.agreement = false;
  }

  public onRegistration() {
    const user = {
      name: this.name,
      username: this.username,
      lastname: this.lastname,
      birthDate: this.birthDate,
      email: this.email,
      password: this.password,
      agreement: this.agreement
    };
    this.registrationService.registerUser(user).subscribe((data) => {
      if (data.success) {
        this.toasterService.pop('success', user.username + ' registered', 'Now you can log in');
        this.clearAllFields();
      } else {
        this.toasterService.pop('warning', 'Check all fields');
      }
    });
  };

}
