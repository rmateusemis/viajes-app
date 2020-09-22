import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {

    const body = {
      email,
      password
    };

    return this.http.post<any>('https://api-coches.herokuapp.com/auth/login', body);

  }
}
