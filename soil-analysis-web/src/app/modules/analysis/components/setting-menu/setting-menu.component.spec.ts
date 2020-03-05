import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMenuComponent } from './setting-menu.component';

describe('SettingMenuComponent', () => {
  let component: SettingMenuComponent;
  let fixture: ComponentFixture<SettingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
