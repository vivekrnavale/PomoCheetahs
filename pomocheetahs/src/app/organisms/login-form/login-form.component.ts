
// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
  }
  username: any;
  password: any;

  displayUserName(value){
    this.username = value;
    //console.log(value);
  }

  displayPassword(value){
    this.password = value; 
    //console.log(value);
  }

}