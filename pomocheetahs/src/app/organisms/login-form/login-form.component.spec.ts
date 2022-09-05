import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  @Component({
    selector: 'sc-username-form-control',
    template: '<div></div>'
  })
  class MockUsernameFCComponent {
    @Output() newItemEvent = new EventEmitter<string>();
    //constructor(private fb: FormBuilder) { }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent, MockUsernameFCComponent ],
      
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
    //fixture.detectChanges();
    const bookForm = fixture.debugElement.query(By.css('sc-username-form-control')).componentInstance;
    console.log(bookForm);
    const input = bookForm.debugElement.query(By.css('input'));
    let fieldTypeInput: HTMLInputElement;

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fir';
    input.triggerEventHandler('keyup', {});
    expect("displayUserName").toHaveBeenCalledWith("fir");
  })
});
