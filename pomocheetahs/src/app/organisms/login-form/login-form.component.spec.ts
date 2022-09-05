import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { findComponent } from 'src/app/findcomponent.function';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  @Component({
    selector: 'sc-username-form-control',
    template: '<div></div>'
  })
  class MockPasswordFCComponent {
    @Output() newItemEvent = new EventEmitter<string>();
    //constructor(private fb: FormBuilder) { }
  }
  @Component({
    selector: 'sc-password-form-control',
    template: '<div></div>'
  })
  class MockUsernameFCComponent {
    @Output() newItemEvent = new EventEmitter<string>();
    //constructor(private fb: FormBuilder) { }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent, MockUsernameFCComponent, MockPasswordFCComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call displayUsername function with value fir ',()=>{
    //spyOn('displayUserName');
    const counter = findComponent(fixture, 'sc-username-form-control');
    counter.triggerEventHandler('newItemEvent','fir');
    expect(component.username).toEqual('fir');
   
  
  })

  it('should call displayPassword function with value first2 ',()=>{
    //spyOn('displayUserName');
    const counter = findComponent(fixture, 'sc-password-form-control');
    counter.triggerEventHandler('new1','first2');
    expect(component.password).toEqual('first2');
   
  
  })
});
