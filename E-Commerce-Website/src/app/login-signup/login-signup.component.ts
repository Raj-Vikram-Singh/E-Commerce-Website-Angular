import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Registration } from '../Model/User.Model';
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
  loginUserCredentials = {};

  registrationForm = this.fb.group({
    UserName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    Password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    Email: ['', [Validators.required, Validators.email]],
    Role: ['', Validators.required],
    Phone: ['', Validators.required],
    Gender: [''],

  });
  globalResponse: any;
  public alerts: Array<IAlert> = [];

if(trigger) {
  const element = document.getElementById('modalButton');
  element.click();
}


  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private regService: RegistrationService, private auth: AuthenticationService, private _router: Router) { }

  loginUser(){

    this.auth.loginUser(this.loginUserCredentials)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/loggedIn']);
      },
      err => console.log(err)
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
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
