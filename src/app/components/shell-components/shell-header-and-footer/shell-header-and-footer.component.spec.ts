import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHeaderAndFooterComponent } from './shell-header-and-footer.component';

describe('ShellHeaderAndFooterComponent', () => {
  let component: ShellHeaderAndFooterComponent;
  let fixture: ComponentFixture<ShellHeaderAndFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellHeaderAndFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellHeaderAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
