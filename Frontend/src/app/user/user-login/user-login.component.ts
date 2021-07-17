import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
  }

}
