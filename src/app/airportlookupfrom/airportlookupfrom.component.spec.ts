import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlookupfromComponent } from './airportlookupfrom.component';

describe('AirportlookupfromComponent', () => {
  let component: AirportlookupfromComponent;
  let fixture: ComponentFixture<AirportlookupfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportlookupfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportlookupfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
