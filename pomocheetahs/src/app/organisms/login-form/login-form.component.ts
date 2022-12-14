import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'sc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private loginService:LoginService){}

  public ngOnInit(): void {
    this.getUsers()
  }

  username: string = ""
  password: string = ""
  users: User[] = []
  authenticated: boolean = false;

  displayUserName(value: string){
    this.username = value;
  }

  displayPassword(value: string){
    this.password = value; 
  }

  getUsers(){
    this.loginService.getUsers().subscribe(incomingData => this.users=incomingData)
  }

  public authenticate(): void {  
    this.users.forEach(creds => {
      if(creds.password === this.password && creds.username === this.username){
        this.authenticated = true;
      }
      else{
        this.router.navigateByUrl('login')
      }


    });
    if(this.authenticated==true){
      this.router.navigateByUrl('portfolio');
    }
  }

}