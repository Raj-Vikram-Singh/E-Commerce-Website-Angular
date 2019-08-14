import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  @Input() public trigger;

if(trigger) {
  const element = document.getElementById('modalButton');
  element.click();
}

  constructor() { }

  ngOnInit() {
  }

}
