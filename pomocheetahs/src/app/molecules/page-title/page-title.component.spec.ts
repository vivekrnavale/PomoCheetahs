import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from './page-title.component';

describe('PageTitleComponent', () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<PageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page title', () => {
    expect(component).toBeTruthy();
  });

  it('should display the given content ', () => {
    const pageTitle = fixture.debugElement.nativeElement as HTMLElement
    expect(fixture.componentInstance.content).toContain('Did you know that SmallChange<sup>TM</sup> has no investment fees on portfolios with balances under $5,000? After that, only 0.25% fee apllies monthly.')
  })
});
