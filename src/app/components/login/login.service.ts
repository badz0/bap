import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  public authToken: any;
  public user: any;

  constructor(private http: Http) {}

  public authenticateUser(user) {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    return this.http.post('http://localhost:8080/users/authenticate', user, options)
      .map((res) => res.json());
  }

  public storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  public logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
