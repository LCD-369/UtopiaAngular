import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregisterformComponent } from './userregisterform.component';

describe('UserregisterformComponent', () => {
  let component: UserregisterformComponent;
  let fixture: ComponentFixture<UserregisterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregisterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregisterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
