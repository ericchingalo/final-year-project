import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMoistureSummaryComponent } from './country-moisture-summary.component';

describe('CountryMoistureSummaryComponent', () => {
  let component: CountryMoistureSummaryComponent;
  let fixture: ComponentFixture<CountryMoistureSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMoistureSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMoistureSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
