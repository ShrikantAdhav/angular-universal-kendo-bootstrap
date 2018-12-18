import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHeaderWithOnlyLogoComponent } from './shell-header-with-only-logo.component';

describe('ShellHeaderWithOnlyLogoComponent', () => {
  let component: ShellHeaderWithOnlyLogoComponent;
  let fixture: ComponentFixture<ShellHeaderWithOnlyLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellHeaderWithOnlyLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellHeaderWithOnlyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
