import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post("https://localhost:44360/api/users/login", user);
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
    return this.http.post("https://localhost:44360/api/users/register", user);
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
