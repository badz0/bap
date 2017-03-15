import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../components/login/login.service';
import { HeaderConstants } from './header.constants';

@Component({
  selector: 'app-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
  providers: [HeaderConstants, LoginService]
})
export class HeaderComponent implements OnInit {
  public menuCollapsed: boolean = true;
  public pages;
  private logedIn: boolean = true;

  constructor(private constants: HeaderConstants,
              private loginService: LoginService) {}

  public ngOnInit() {
    if (this.logedIn) {
      this.pages = this.constants.logedInPages;
    } else {
      this.pages = this.constants.regularPages;
    }
  }
  public get isLogedIn(): boolean {
    return this.loginService.loggedIn();
  }
}
