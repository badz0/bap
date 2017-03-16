import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {}

  public getProfileData() {
    let header = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('id_token')
    });
    return this.http.get('http://localhost:8080/users/profile-data', {headers: header})
      .map((res) => res.json());
  }
}
