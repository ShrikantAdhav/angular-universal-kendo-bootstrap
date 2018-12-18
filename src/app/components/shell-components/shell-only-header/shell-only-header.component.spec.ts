import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellOnlyHeaderComponent } from './shell-only-header.component';

describe('ShellOnlyHeaderComponent', () => {
  let component: ShellOnlyHeaderComponent;
  let fixture: ComponentFixture<ShellOnlyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellOnlyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellOnlyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
