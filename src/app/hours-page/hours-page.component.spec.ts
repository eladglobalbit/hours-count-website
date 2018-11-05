import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursPageComponent } from './hours-page.component';

describe('HoursPageComponent', () => {
  let component: HoursPageComponent;
  let fixture: ComponentFixture<HoursPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
