import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['login.scss'],
  templateUrl: 'login.components.html',
})
export class LoginComponent implements OnInit {
  public user: Object = {};
  constructor(private router: Router) {
  }
  public ngOnInit() {}
  public onLogin() {
    console.log(this.user);
  }
  public onRegistration() {
    this.router.navigate(['registration']);
  }
}
