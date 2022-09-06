import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'sc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router){}

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
  }
  username: any;
  password: any;

  displayUserName(value: string){
    this.username = value;
    //console.log(value);
  }

  displayPassword(value: string){
    this.password = value; 
    //console.log(value);
  }

  public submit(): void {   
    this.router.navigateByUrl('portfolio');
  }

}