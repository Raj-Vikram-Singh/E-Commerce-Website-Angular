import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginModalTrigger = false;
  constructor() { }

  ngOnInit() {
  }

  loginTriggerFunc() {
    this.loginModalTrigger = this.loginModalTrigger ? false : true;
  }

}
