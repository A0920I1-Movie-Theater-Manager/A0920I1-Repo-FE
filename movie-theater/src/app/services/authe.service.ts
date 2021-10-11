import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';
import {SignUp} from '../shared/model/dto/SignUp';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      email: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: SignUp): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup', user, httpOptions);
  }

  checkEmail(email: string): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'check-email', email, httpOptions);
  }

  checkPhone(phone: any): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'check-phone', phone, httpOptions);
  }

  checkUsername(username: any): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'check-username', username, httpOptions);

  }
}
