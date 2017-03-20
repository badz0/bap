import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../components/login/login.service';

@Component({
  selector: 'app-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
  providers: [LoginService]
})
export class HeaderComponent {
  public menuCollapsed: boolean = true;

  constructor(private loginService: LoginService) {}

  public isLogedIn(): boolean {
    return this.loginService.loggedIn();
  }
}
