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

  form : FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    })  }

   login(){
    this.authService.
            login(this.form.value);
    if(this.authService.isAuthenticated)
      {
        this.router.navigate([""]);
    }
  }

  get password() {
    return this.form.get('password')
  }

  get username(){
    return this.form.get('username')
  }
}

