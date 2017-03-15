import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../../components/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService,
              private router: Router) {

  }

  public canActivate() {
    if (this.loginService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
