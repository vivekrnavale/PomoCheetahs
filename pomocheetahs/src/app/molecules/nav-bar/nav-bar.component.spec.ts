import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have appropriate Nav menu', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.Activity).toEqual("Activity")
    expect(fixture.componentInstance.Portfolio).toEqual("Portfolio")
    expect(fixture.componentInstance.Preferences).toEqual("Preferences")
    expect(fixture.componentInstance.Trade).toEqual("Trade")

    // expect(fixture.componentInstance.content).toContain('Copyright 1998-2021 FMR LLC. All Rights Reserved.')
  })
});
