import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API : string = 'https://surveysapi.azurewebsites.net/api/';

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(`${this.API}/users/login`, user);
  }

  setToken(token){
    localStorage.setItem('token',token);
  }

  setRole(role){
    localStorage.setItem('role', role);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  register(user) {
    return this.http.post(`${this.API}/users/register`, user);
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  

  isAdmin(){
    if(localStorage.getItem('role') !== null){
      return localStorage.getItem('role') === 'Admin';
    };
  }

  getJwt(){
     return localStorage.getItem('token');
  }
}
