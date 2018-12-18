import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithOnlyLogoComponent } from './header-with-only-logo.component';

describe('HeaderWithOnlyLogoComponent', () => {
  let component: HeaderWithOnlyLogoComponent;
  let fixture: ComponentFixture<HeaderWithOnlyLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithOnlyLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithOnlyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
