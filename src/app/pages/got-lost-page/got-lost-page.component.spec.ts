import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotLostPageComponent } from './got-lost-page.component';

describe('GotLostPageComponent', () => {
  let component: GotLostPageComponent;
  let fixture: ComponentFixture<GotLostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotLostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotLostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
