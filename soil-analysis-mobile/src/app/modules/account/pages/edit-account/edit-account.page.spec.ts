import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAccountPage } from './edit-account.page';

describe('EditAccountPage', () => {
  let component: EditAccountPage;
  let fixture: ComponentFixture<EditAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
