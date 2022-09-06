// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-username-form-control',
  templateUrl: './username-form-control.component.html',
  styleUrls: ['./username-form-control.component.css'],
})
export class UsernameFormControlComponent implements OnInit {
  @Output() usrVerify = new EventEmitter<string>();
  //constructor(private fb: FormBuilder) { }
  label: string = 'Username';
  // values = '';
  matched: boolean = true;
  //reg = new RegExp(/[a-z]*/)
  addNewItem(value: string) {
    this.usrVerify.emit(value);
  }
  onKey(value: string) {
    if (
      value.length < 3 ||
      value.length > 18 ||
      value.includes('!') ||
      value.includes('@') ||
      value.includes('#') ||
      value.includes('$') ||
      value.includes('%') ||
      value.includes('^') ||
      value.includes('&') ||
      value.includes('*') ||
      value.includes('(') ||
      value.includes(')') ||
      value.includes('+') ||
      value.includes('=') ||
      value.includes('[') ||
      value.includes(']') ||
      value.includes('{') ||
      value.includes('}') ||
      value.includes('|') ||
      value.includes(':') ||
      value.includes(';') ||
      value.includes('"') ||
      value.includes('>') ||
      value.includes('<') ||
      value.includes(',') ||
      value.includes('.') ||
      value.includes('/') ||
      value.includes('?')
    ) {
      this.matched = false;
      console.log('pp wrong');
      //alert("lkttl");
      //document.querySelector("input").style.border = "1px solid red";
    } else {
      //alert("lkl");
      //this.addNewItem(value);
      this.usrVerify.emit(value);
      this.matched = true;
      console.log('pp right');
    }
  }

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function: */
  }
}
