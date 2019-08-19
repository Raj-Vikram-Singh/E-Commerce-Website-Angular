import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginModalTrigger = false;
  isLoggedIn = false;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.isLoggedIn.subscribe(message => this.isLoggedIn = message);
  }

  loginTriggerFunc() {
    this.loginModalTrigger = this.loginModalTrigger ? false : true;
  }

  logout() {
    this.auth.logoutUser();
  }

}
