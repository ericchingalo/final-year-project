import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionPieChartComponent } from './region-pie-chart.component';

describe('RegionPieChartComponent', () => {
  let component: RegionPieChartComponent;
  let fixture: ComponentFixture<RegionPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
