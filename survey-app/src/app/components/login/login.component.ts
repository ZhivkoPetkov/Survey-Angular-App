import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  login() {
    this.authService.
      login(this.form.value).subscribe(data => {
        this.authService.setToken(data['token']);
        this.authService.setRole(data['role']);
        if (this.authService.isAuthenticated()) {
          this.router.navigate([""]);
        }
      })
    this.form.reset();
    this.router.navigate(["auth/login"])

  }

  get password() {
    return this.form.get('password')
  }

  get username() {
    return this.form.get('username')
  }
}

