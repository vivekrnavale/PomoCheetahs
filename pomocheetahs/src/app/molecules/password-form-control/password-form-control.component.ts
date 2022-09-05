// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'sc-password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.css'],
})
export class PasswordFormControlComponent implements OnInit {
  @Output() new1 = new EventEmitter<string>();
  label: string = 'Password';
  // values = '';
  matched: boolean = true;
  //var reg = /(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(?=.*\d+.*)(?=.*[-[!“#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+.*)(?!.*(.)\1\1\1.*)(?!.*(.{3}).*\2.*).{8,256}$/;
  // reg = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()+=[]{}|:;"><,./?])[a-zA-Z0-9!@#$%^&*()+=[]{}|:;"><,./?]{10,16}$/;
  onKey(value: string) {
    //this.values += value + ' | ';
    //alert(value);
    //console.log(value);
    // if (value.length<6 || value.length>24 || value.includes('!') || value.includes('@')
    //   || value.includes('#') || value.includes('$') || value.includes('%') ||
    //    value.includes('^') || value.includes('&') || value.includes('*') || value.includes('(')
    //    || value.includes(')') || value.includes('+') || value.includes('=')
    //    || value.includes('[') || value.includes(']') || value.includes('{') || value.includes('}')
    //    || value.includes('|') || value.includes(':') || value.includes(';') || value.includes('"')
    //    || value.includes('>') || value.includes('<') || value.includes(',') || value.includes('.')
    //    || value.includes('/') || value.includes('?') ){
    // if (!reg.test(value))
    //   this.matched =false;
    //   console.log("pp wrong");
    //   //alert("lkttl");
    //   //document.querySelector("input").style.border = "1px solid red";
    // }
    // else{
    //   //alert("lkl");
    //   this.matched = true;
    //   console.log("pp right");
    //   this.new1.emit(value);
    // }
    var regex = new RegExp('^[a-zA-Z0-9-_-]{6,24}$');

    if (regex.test(inputvalue)) {
      this.matched = true;
      this.new1.emit(value);

      // errorBox?.style.display= "none"

      // this.passwordBox.className = "default"

      // this.onValidPassword.emit(inputvalue)
    } else {
      this.matched = false;

      // errorBox?.style.display= "block"

      // this.passwordBox.className = "failure"
    }
  }

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
  }
}
