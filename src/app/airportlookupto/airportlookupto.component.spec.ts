import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlookuptoComponent } from './airportlookupto.component';

describe('AirportlookuptoComponent', () => {
  let component: AirportlookuptoComponent;
  let fixture: ComponentFixture<AirportlookuptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportlookuptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportlookuptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
