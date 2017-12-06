import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error: string|null = null;

  minLength = 5;
  maxLength = 10;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength)
      ]),
    });
  }

  usernameErrors() {
    if (this.loginForm.get('username').valid) {
      return false;
    } else {
      let e = '';
      for (const error in this.loginForm.get('username').errors) {
        if (this.loginForm.get('username').errors.hasOwnProperty(error)) {
          e = e === '' ? e + error : e + ', ' + error;
        }
      }
      return e;
    }
  }

  passwordErrors() {
    if (this.loginForm.get('password').valid) {
      return false;
    } else {
      let e = '';
      for (const error in this.loginForm.get('password').errors) {
        if (this.loginForm.get('password').errors.hasOwnProperty(error)) {
          e = e === '' ? e + error : e + ', ' + error;
        }
      }
      return e;
    }
  }

  submit() {
    if (this.loginForm.valid) {
      this.error = this.userService.login(
        this.loginForm.get('username').value,
        this.loginForm.get('password').value
      );
    }
  }
}
