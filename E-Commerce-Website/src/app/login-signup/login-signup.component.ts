import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Registration, Credentials } from '../Model/User.Model';
import { RegistrationService } from '../Services/registration.service';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  @Input() public trigger;

  registrationInputs: Registration[] ;
  loginUserCredentials: Credentials[];
  userId;

  isLoggedin;

  invalidCredentials = false;
  dismissFlag = true;

  //


  UserLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
  });

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    phone: ['', Validators.required],
    gender: [''],

  });
  globalResponse: any;
  public alerts: Array<IAlert> = [];

if(trigger) {
  const element = document.getElementById('modalButton');
  element.click();
}



dismissModal() {

if (this.dismissFlag) {
  const modalDismiss = document.getElementById('loginButton');
  modalDismiss.setAttribute('data-dismiss', 'modal');
  modalDismiss.click();
  this.dismissFlag  = false;
}
}

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private regService: RegistrationService, private auth: AuthenticationService, private _router: Router) { }

  loginUser() {
    this.loginUserCredentials = this.UserLogin.value;
    this.auth.loginUser(this.loginUserCredentials)
    .subscribe(
      res => {
        if (res.message === 'Authorized User') {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/loggedIn']);
          this.auth.loggedIn();
          this.dismissModal();
        } else {
          this.invalidCredentials = true;
          this._router.navigate(['/']);
        }
      },
      err => {
        console.log(err);
      this.invalidCredentials = true;
      }
    );
  }

  OnRegister(input) {
    this.registrationInputs = this.registrationForm.value;

    this.regService.RegisterUser(this.registrationInputs)
    .subscribe((result) => {
      this.globalResponse = result;
    },
    error => { // This is error part
      this.alerts.push({
        id: 2,
        type: 'danger',
        message: 'Registration failed with error: ' + error.status + '-' + error.statusText,
      });
    },
    () => {
        //  This is Success part
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Registration successful.',
        });
        }
      );



  }


  ngOnInit() {
    this.auth.isLoggedIn.subscribe(message => this.isLoggedin = message);
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
