import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcardComponent } from './bookingcard.component';

describe('BookingcardComponent', () => {
  let component: BookingcardComponent;
  let fixture: ComponentFixture<BookingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
