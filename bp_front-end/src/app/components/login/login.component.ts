import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  styleUrls: ['login.scss'],
  templateUrl: 'login.components.html',
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private router: Router,
              private loginService: LoginService,
              private toasterService: ToasterService) {
  }
  public ngOnInit() {
    console.log('Login Page');
  }

  public onLogin() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.loginService.authenticateUser(user).subscribe((data) => {
      if (data.success) {
        this.loginService.storeUserData(data.token, data.user);
        this.toasterService.pop('success', data.msg, 'Welcome on Auction of Dates');
        console.log(data.user);
      } else {
        this.toasterService.pop('warning', data.msg, 'Check username and password again');
      }
    });
  }

  public onRegistration() {
    this.router.navigate(['registration']);
  }
  public onLogOut() {
    this.loginService.logOut();
    this.toasterService.pop('success', 'You are logged out');
  }

}
