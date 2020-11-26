import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post("https://localhost:44360/api/users/login", user).subscribe(x => {
      localStorage.setItem('token', x['token']);
    });
   
  }

  logout() {
    return localStorage.removeItem('token');
  }


  register(user) {
    return this.http.post("https://localhost:44360/api/users/register", user);
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  getJwt(){
     return localStorage.getItem('token');
  }
}
