import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UsernameFormControlComponent } from './username-form-control.component';

describe('UsernameFormControlComponent', () => {
  let component: UsernameFormControlComponent;
  let fixture: ComponentFixture<UsernameFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create username form control', () => {
    expect(component).toBeTruthy();
  });

  //we pass 2 character username it should throw an error
  /* 
  const input = fixture.debugElement.query(By.css('input'));
  input.triggerEventHandler('keydown.enter', {});
  fixture.detectChanges();*/
  it('should show error message when 2 charatcers word is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fi';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeFalse();

  })

  it('should show error message when special charcter % is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fier%';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeFalse();

  })

  it('should show error message when word with 19 characters is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fierfierfierfierfie';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeFalse();

  })

  it('should not show error message when word with 17 characters is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'fierfierfierfierf';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeTrue();

  })

  it('should not show error message when word er2_- is passed', () => {
    let fieldTypeInput: HTMLInputElement;
    const input = fixture.debugElement.query(By.css('input'));

    fieldTypeInput = input.nativeElement;
    fieldTypeInput.value = 'er2_-';
    input.triggerEventHandler('keyup', {});
    expect(component.matched).toBeTrue();

  })
});
