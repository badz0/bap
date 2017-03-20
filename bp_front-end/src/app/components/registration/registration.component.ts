import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { ToasterService } from 'angular2-toaster';
import { UserRegistration } from './interface/user-registration';
import { FormErrors } from './interface/form-errors';
import { ValidationMessages } from './interface/validation-messages';

@Component({
  selector: 'app-registration',
  styleUrls: ['registration.scss'],
  templateUrl: 'registration.components.html',
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public newUser: UserRegistration = new UserRegistration();
  public formErrors = FormErrors.Errors;
  public validationMessages = ValidationMessages.Messages;

  constructor(private router: Router,
              private registrationService: RegistrationService,
              private toasterService: ToasterService,
              private fb: FormBuilder) {
}

  public ngOnInit() {
    this.buildForm();
  }
  public buildForm(): void {
    this.registrationForm = this.fb.group({
      name: [this.newUser.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]
      ],
      lastname: [this.newUser.lastname, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]],
      birthDate: [this.newUser.birthDate, [
        Validators.required,
      ]],
      username: [this.newUser.username, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]],
      email: [this.newUser.email, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]],
      password: [this.newUser.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]],
      agreement: [this.newUser.agreement, [
        Validators.required,
      ]],
    });
    this.registrationForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();
  }
  public onValueChanged(data?: any) {
    if (!this.registrationForm) { return; }
    const form = this.registrationForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  };
  public clearAllFields() {
       this.registrationForm.reset();
  }

  public onRegistration() {
    this.registrationService.registerUser(this.newUser).subscribe((data) => {
      if (data.success) {
        this.toasterService.pop('success',
        this.newUser.username + ' registered', 'Now you can log in');
        this.clearAllFields();
      } else if (data.emailTaken) {
        this.toasterService.pop('warning', 'email is already registered');
      } else if (data.usernameTaken) {
        this.toasterService.pop('warning', 'username is already registered');
      } else {
        this.toasterService.pop('warning', 'check all fields');
      }
    });
  }
}
