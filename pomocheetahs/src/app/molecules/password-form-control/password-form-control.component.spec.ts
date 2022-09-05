import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PasswordFormControlComponent } from './password-form-control.component';

describe('PasswordFormControlComponent', () => {
  let component: PasswordFormControlComponent;
  let fixture: ComponentFixture<PasswordFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create password Form Control', () => {
    expect(component).toBeTruthy();
  });

  it('should show password error message when 2 charatcers word is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fi';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeFalse();

  })

  it('should show password error message when special charcter % is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fier%';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeFalse();

  })

  it('should show password error message when word with 25 characters is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fierfierfierfierfierfierf';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeFalse();

  })

  it('should not show password error message when word with 23 characters is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fierfierfierfierfierfie';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeTrue();

  })

  it('should not show password error message when word erj2_- is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'erj2_-';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeTrue();

  })
});
