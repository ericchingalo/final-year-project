import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTemperatureSummaryComponent } from './country-temperature-summary.component';

describe('CountryTemperatureSummaryComponent', () => {
  let component: CountryTemperatureSummaryComponent;
  let fixture: ComponentFixture<CountryTemperatureSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTemperatureSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTemperatureSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
