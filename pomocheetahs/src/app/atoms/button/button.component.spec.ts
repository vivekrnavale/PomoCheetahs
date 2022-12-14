import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login button ', () => {
    expect(component).toBeTruthy();
  });

  it('should display Log In', ()=>{
    const loginButton = fixture.debugElement.nativeElement as HTMLElement
    expect(loginButton.querySelector('.button')?.innerHTML).toEqual("Log In")
  });
});
