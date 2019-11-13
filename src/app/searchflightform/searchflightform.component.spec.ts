import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchflightformComponent } from './searchflightform.component';

describe('SearchflightformComponent', () => {
  let component: SearchflightformComponent;
  let fixture: ComponentFixture<SearchflightformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchflightformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchflightformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
