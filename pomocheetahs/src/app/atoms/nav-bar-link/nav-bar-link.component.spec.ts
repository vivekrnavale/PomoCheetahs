import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavBarLinkComponent } from './nav-bar-link.component';

describe('NavBarLinkComponent', () => {
  let component: NavBarLinkComponent;
  let fixture: ComponentFixture<NavBarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create links for Navbar ', () => {
    expect(component).toBeTruthy();
  });

  it('should display smallchange in anchor tag',() => {
    component.name = "smallchange";
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('a'));
    const anative = input.nativeElement as HTMLElement;
    expect(anative.textContent).toEqual("smallchange");
  })
});
