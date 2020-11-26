import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })}

   register(){
     this.authService.
      register(this.form.value).
      subscribe((data) => {
      this.router.navigate(['auth/login'])
      });  
  }

  get password() {
    return this.form.get('password')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }

  get username(){
    return this.form.get('username')
  }
}
