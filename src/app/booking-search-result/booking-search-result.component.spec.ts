import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSearchResultComponent } from './booking-search-result.component';

describe('BookingSearchResultComponent', () => {
  let component: BookingSearchResultComponent;
  let fixture: ComponentFixture<BookingSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
