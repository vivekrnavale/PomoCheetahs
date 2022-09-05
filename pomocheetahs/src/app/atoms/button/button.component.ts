import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() username: any;
  @Input() password: any;

  display(){
    let usernameEncoded = window.btoa(this.username);
    let passwordEncoded = window.btoa(this.password);
    let details = {"username": this.username, "password": this.password,
                  "usernameEncoded": usernameEncoded, "passwordEncoded": passwordEncoded}
    console.log(details);
  }

}
