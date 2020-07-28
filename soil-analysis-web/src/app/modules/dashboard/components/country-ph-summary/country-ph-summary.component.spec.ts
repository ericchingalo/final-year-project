import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPhSummaryComponent } from './country-ph-summary.component';

describe('CountryPhSummaryComponent', () => {
  let component: CountryPhSummaryComponent;
  let fixture: ComponentFixture<CountryPhSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPhSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPhSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
