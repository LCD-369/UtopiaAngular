import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlookupmodalComponent } from './airportlookupmodal.component';

describe('AirportlookupmodalComponent', () => {
  let component: AirportlookupmodalComponent;
  let fixture: ComponentFixture<AirportlookupmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportlookupmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportlookupmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
